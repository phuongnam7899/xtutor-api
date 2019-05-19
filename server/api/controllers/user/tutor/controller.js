import tutorModel from "../../../models/tutor";
import tutor from "../../../models/tutor";

export class Controller {
    get(req,res) {
        tutorModel.find({}, (err, data) => {
            if(err) console.log
            else res.send(data)
        })
    }
    findOne(req, res){
        const { id } = req.body;
        tutorModel.find({ "_id": id })
        .populate('user_id')
        .exec((err, tutor) => {
            res.send(tutor)
        })
    }
    filter(req, res){
        const condition_obj = {}
        for (let key in req.body) {
            if(req.body[key] !==""){
                condition_obj[`teaching_subject.${key}`] = req.body[key]
            }
        }
        console.log(condition_obj)
        tutorModel.find(condition_obj)
        .populate('user_id')
        .exec((err, userdata) => {
            if(err) console.log(err)
            else res.send(userdata)
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