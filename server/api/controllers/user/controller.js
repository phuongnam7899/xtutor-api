export class Controller{
    //register
    register(req, res){
        res.send(req.body);
    }
}
export default new Controller();