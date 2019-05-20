import userModel from "../../models/user";
import tutorModel from "../../models/tutor";
import stdModel from "../../models/student";
import classModel from "../../models/class";


export class Controller{
    getOne(req,res){
        const id = req.params.id;
        classModel.findById(id)
        .populate('tutor_id')
        .populate('student_id')
        .exec((err,classFound) => {
            if(err) res.send(err)
            else res.send(classFound)
        })
    }
    cancelClass(req,res){
        const id = req.params.id;
        classModel.findByIdAndDelete(id)
            .catch((err) => {
                res.send(err);
            });
    }
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
