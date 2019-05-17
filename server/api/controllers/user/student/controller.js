const studentModel = require("../../../models/student");

export class Controller {
    get(req,res){
        res.send("u r student");
    }
}
export default new Controller;