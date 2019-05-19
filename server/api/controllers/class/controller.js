import userModel from "../../models/user";
import tutorModel from "../../models/tutor";
import stdModel from "../../models/student";
import classModel from "../../models/class";

export class Controller {
    bookClass(req, res){
        const { tutor_id, student_id, subject, sessions } = req.body;

        classModel.create({ tutor_id, student_id, subject, sessions }, (err, newClass) => {
            if(err) console.log(err);
            else res.send(newClass)
        })
    }
    findStdBookedClass(req, res){
        classModel.find(
            {"student_id": req.params.student_id},
            (err, classes) => {
                if(err) console.log(err)
                else res.send(classes)
            }
        )
    }
}
export default new Controller();