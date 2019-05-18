import tutorModel from "../../../models/tutor";

export class Controller {
    get(req,res) {
        res.send("u r tutor");
    }
}
export default new Controller();