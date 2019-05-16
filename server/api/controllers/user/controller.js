import userModel from "../../models/user";
import tutorModel from "../../models/tutor";
import stdModel from "../../models/student";
import classModel from "../../models/class";
export class Controller{
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