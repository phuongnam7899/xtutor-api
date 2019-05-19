import * as expresss from 'express';
import controller from './controller';
export default expresss
        .Router()
        .get("/",controller.get)
        .put("/update_reference", controller.update_reference)
        .put("/update_experience", controller.update_working_experience)
        .put("/update_teaching_sub", controller.update_teaching_sub)
        .put("/update_feedback", controller.update_feedback)
        .get("/:id", controller.findOne)
        .post("/filter", controller.filter)
