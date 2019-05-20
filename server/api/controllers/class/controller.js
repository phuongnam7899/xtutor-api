import userModel from "../../models/user";
import tutorModel from "../../models/tutor";
import stdModel from "../../models/student";
import classModel from "../../models/class";
import tutor from "../../models/tutor";


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
    showTutorCalendar(req, res){
        let allClasses = [];
        classModel.find(
            {"tutor_id": req.params.tutor_id},
            (err, classes) => {
                if(err) console.log(err)
                else {
                    for(let i = 0; i < classes.length; i++){
                        for(let j = 0; j < classes[i].sessions.length; j++){
                            //console.log(classes[i].sessions[j])
                            allClasses.push(classes[i].sessions[j]);
                        }
                    }
                }
            }
        )
        tutorModel.find(
            {"user_id": req.params.tutor_id},
            (err, tutor) => {
                if(err) console.log(err)
                else{
                    allClasses = allClasses.concat(tutor[0].free_calendar)
                    res.send(allClasses)
                }
            }   
        )
        
    }
    
}
export default new Controller();
