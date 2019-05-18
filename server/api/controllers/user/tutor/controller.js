import tutorModel from "../../../models/tutor";
import tutor from "../../../models/tutor";

export class Controller {
    get(req,res) {
        tutorModel.find({}, (err, data) => {
            if(err) console.log
            else res.send(data)
        })
    }
    update_reference(req, res){
        const { major, institute, certificate } = req.body;

        tutorModel.findByIdAndUpdate(
            req.body.id,
            {$set: {reference:{ major, institute, certificate}}},
            {new: true},
            (err, updated) => {
                if(err) console.log(err);
                else{
                    tutorModel.find({}, (err, tutors) => {
                        if(err) console.log(err)
                        else res.send(tutors)
                    })
                }
            }
        )
    }
    update_working_experience(req, res){
        const expe_arr = req.body.experiences;
        tutorModel.findByIdAndUpdate(
            req.body.id,
            {$set: {working_experience: expe_arr}},
            {new: true},
            (err, updated) => {
                if(err) console.log(err);
                else{
                    tutorModel.find({}, (err, tutors) => {
                        if(err) console.log(err)
                        else res.send(tutors)
                    })
                }
            }
        )
    }
    update_teaching_sub(req, res){
        tutorModel.findByIdAndUpdate(
            req.body.id,
            {$set: {teaching_subject: req.body.teaching_subs}},
            {new: true},
            (err, updated) => {
                if(err) console.log(err);
                else{
                    tutorModel.find({}, (err, tutors) => {
                        if(err) console.log(err)
                        else res.send(tutors)
                    })
                }
            }
        )
    }
    update_feedback(req, res){
        tutorModel.findByIdAndUpdate(
            req.body.id,
            {$set: {feedback: req.body.feedbacks}},
            {new: true},
            (err, updated) => {
                if(err) console.log(err);
                else{
                    tutorModel.find({}, (err, tutors) => {
                        if(err) console.log(err)
                        else res.send(tutors)
                    })
                }
            }
        )
    }

}
export default new Controller();