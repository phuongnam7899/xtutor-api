import tutorModel from "../../../models/tutor";
import tutor from "../../../models/tutor";

export class Controller {
    get(req, res) {
        tutorModel.find({}, (err, data) => {
            if (err) console.log
            else res.send(data)
        })
    }
    findOne(req, res) {
        const id = req.params.id;
        tutorModel.findById(id)
            .populate('user_id')
            .exec((err, tutor) => {
                res.send(tutor)
            })
    }
    filter(req, res) {
        // const condition_obj = {}
        // for (let key in req.body) {
        //     if (req.body[key] !== "") {
        //         condition_obj[`teaching_subject.${key}`] = req.body[key]
        //     }
        // }
        // console.log(condition_obj)
        // tutorModel.find(condition_obj)
        //     .populate('user_id')
        //     .exec((err, userdata) => {
        //         if (err) console.log(err)
        //         else res.send(userdata)
        //     })
        const { academic_level, subject, country_name } = req.body;
        const queryTutor = {};
        const queryUser = {};

        if(subject) {
            queryTutor['teaching_subject.subject'] = subject;
        }
        if(academic_level) {
            queryTutor['teaching_subject.academic_level'] = academic_level;
        }
        if(country_name) {
            queryUser['userInfo.profile.country_name'] = country_name;
        }

        tutorModel.aggregate([
            {
                '$match': queryTutor
            },
            {
				'$lookup': {
					'from': 'users',
					'localField': 'user_id',
					'foreignField': '_id',
					'as': 'userRefs'
				}
            },
            {
                '$addFields': {
                    'userInfo': { '$arrayElemAt': ['$userRefs', 0] }
                }
            },
            {
                '$match': queryUser
            }
        ]).then(tutors => {
            res.send(tutors);
        }).catch(err => {
            console.log(err);
        });
    }
    updateReference(req, res) {
        const { major, institute, certificate } = req.body;

        tutorModel.findByIdAndUpdate(
            req.body.id,
            { $set: { reference: { major, institute, certificate } } },
            { new: true },
            (err, updated) => {
                if (err) console.log(err);
                else {
                    tutorModel.find({}, (err, tutors) => {
                        if (err) console.log(err)
                        else res.send(tutors)
                    })
                }
            }
        )
    }
    updateFreeTime(req, res) {
        const newFreeTime = req.body.free_time;
        const id = req.params.id;
        tutorModel.findById(id)
            .then((tutorFound) => {
                let oldFreeTime = tutorFound.free_calendar;
                tutorModel.updateOne(
                    { "_id": id },
                    { free_calendar: oldFreeTime.concat(newFreeTime) })
                    .then(
                        (update) => {res.send(update)})
            })
            .catch((err) => res.send(err))
    }

    updateWorkingExperience(req, res) {
        const expe_arr = req.body.experiences;
        tutorModel.findByIdAndUpdate(
            req.body.id,
            { $set: { working_experience: expe_arr } },
            { new: true },
            (err, updated) => {
                if (err) console.log(err);
                else {
                    tutorModel.find({}, (err, tutors) => {
                        if (err) console.log(err)
                        else res.send(tutors)
                    })
                }
            }
        )
    }
    updateTeachingSub(req, res) {
        tutorModel.findByIdAndUpdate(
            req.body.id,
            { $set: { teaching_subject: req.body.teaching_subs } },
            { new: true },
            (err, updated) => {
                if (err) console.log(err);
                else {
                    tutorModel.find({}, (err, tutors) => {
                        if (err) console.log(err)
                        else res.send(tutors)
                    })
                }
            }
        )
    }
    updateFeedback(req, res) {
        tutorModel.findByIdAndUpdate(
            req.body.id,
            { $set: { feedback: req.body.feedbacks } },
            { new: true },
            (err, updated) => {
                if (err) console.log(err);
                else {
                    tutorModel.find({}, (err, tutors) => {
                        if (err) console.log(err)
                        else res.send(tutors)
                    })
                }
            }
        )
    }
}

export default new Controller();