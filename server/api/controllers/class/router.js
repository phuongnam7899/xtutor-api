import * as express from 'express';
import controller from './controller';

export default express
.Router()
.post("/", controller.bookClass)
.get("/student/:student_id", controller.findStdBookedClass)
