import classModel from '../../models/class';

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
}

export default new Controller;