import userModel from "../../models/user";
import tutorModel from "../../models/tutor"
const jwt = require('../../../../node_modules/jsonwebtoken');


export class Controller {
    login(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(401).send({ success: 0, message: "account/password missing" })
        } else {
            userModel.findOne({account : {email,password} })
                .then((userFound) => {
                    if (!userFound) res.status(404).send({ success: 0, message: "user not found" });
                    else {
                        if (password != userFound.account.password) res.status(40).send({ success: 0, message: "wrong password" });
                        else {
                            const payload = {
                                email: email,
                                password: password
                            }
                            const token = jwt.sign(payload, process.env.SECRET_KEY);
                            if(userFound.role === "student") res.redirect(`/api/user/student?token=${token}`);
                            else res.send(token);
                        }
                    }
                })
        }
    }
    register(req, res){
        const { role, first_name, last_name, email, password, phone_num, gender_name } = req.body;

        userModel.create(
            {   profile: {last_name: last_name, first_name: first_name, gender_name: gender_name, phone_number: phone_num},
                account: {email: email, password: password },
                role: role
            },
            (err, user) => {
                if(err) console.log(err)
                else{
                    if(role === "tutor"){
                        tutorModel.create({user_id: user._id}, (err, tutor) => {
                            if(err) console.log(err)
                            else res.send(tutor)
                        })
                    }else if(role === "student"){
                        stdModel.create({user_id: user._id}, (err, student) => {
                            if(err) console.log(err)
                            else res.send(student)
                        }) 
                    }else{
                        res.send("NO ROLE")
                    }
                }
            }
        )
    }
}

export default new Controller();