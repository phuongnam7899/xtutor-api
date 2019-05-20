import * as express from 'express';
import controller from './controller';

export default express
.Router()
.post("/", controller.bookClass)
.get("/student/:student_id", controller.findStdBookedClass)
.get("/tutor/:tutor_id", controller.showTutorCalendar)
.put("/tutor/update_free_time", controller.update_free_time)