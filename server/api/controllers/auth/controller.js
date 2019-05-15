import userModel from "../../models/user";

export class Controller {
    login( req,res){
        res.send("login");
        // const {email, password} = req.body;
        // if(!email || !password){
        //     res.status(401).send({success:0, message: "account/password missing"})
        // }else{
        //     // userModel.findOne({email})
        //     //     .then((userFound) => {
        //     //         if(!userFound) res.status(404).send({success:0, message: "user not found"});
        //     //         else{
        //     //             if(password != userFound.password) res.status(40).send({success:0, message: "wrong password"});
        //     //             else res.send("login")
        //     //         }
        //     //     })
        //     res.send(password);
        // }
    }
}

export default new Controller();