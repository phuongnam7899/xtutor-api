import * as expresss from 'express';
import controller from './controller';
export default expresss
        .Router()
        .get("/",controller.get)
        .get("/:id", controller.findOne)
        .put("/update_reference", controller.update_reference)
        .put("/update_experience", controller.update_working_experience)
        .put("/update_teaching_sub", controller.update_teaching_sub)
        .put("/update_feedback", controller.update_feedback)
        .put("/update_free_time/:id", controller.update_free_time)
        .post("/filter", controller.filter)
