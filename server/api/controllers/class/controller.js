import userModel from "../../models/user";
import tutorModel from "../../models/tutor";
import stdModel from "../../models/student";
import classModel from "../../models/class";
import tutor from "../../models/tutor";


export class Controller {
    getOne(req, res) {
        const id = req.params.id;
        classModel.findById(id)
            .populate('tutor_id')
            .populate('student_id')
            .exec((err, classFound) => {
                if (err) res.send(err)
                else res.send(classFound)
            })
    }
    cancelClass(req, res) {
        const id = req.params.id;
        classModel.findByIdAndDelete(id)
            .then((err, data) => {
                console.log(data)
            })
            .catch((err) => {
                res.send(err);
            });
    }
    bookClass(req, res) {
        const { tutor_id, student_id, subject, sessions } = req.body;

        classModel.create({ tutor_id, student_id, subject, sessions }, (err, newClass) => {
            if (err) console.log(err);
            else res.send(newClass)
        })
    }
    findStdBookedClass(req, res) {
        classModel.find(
            { "student_id": req.params.student_id },
            (err, classes) => {
                if (err) console.log(err)
                else res.send(classes)
            }
        )
    }
    showTutorCalendar(req, res) {
        let allClasses = [];
        classModel.find(
            { "tutor_id": req.params.tutor_id },
            (err, classes) => {
                if (err) console.log(err)
                else {
                    for (let i = 0; i < classes.length; i++) {
                        allClasses = allClasses.concat(classes[i].sessions);
                    }
                }
            }
        );
        tutorModel.findById(req.params.tutor_id)
            .then((tutor) => {
                allClasses = allClasses.concat(tutor.free_calendar);
                res.send(allClasses);
            })
            .catch((err) => {
                res.send(err)
            })

    }
}
export default new Controller();
