import userModel from "../../models/user";
const jwt = require('../../../../node_modules/jsonwebtoken');


export class Controller {
    login(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(401).send({ success: 0, message: "account/password missing" })
        } else {
            // userModel.findOne({email})
            //     .then((userFound) => {
            // if(!userFound) res.status(404).send({success:0, message: "user not found"});
            // else{
            // if(password != userFound.password) res.status(40).send({success:0, message: "wrong password"});
            // else {
            const payload = {
                email: email,
                password: password
            }
            const token = jwt.sign(payload, "app.get('secretKey')");
            res.send(token);
            //         }
            //     }
            // })
        }
        // }
        // }
    }
}

export default new Controller();