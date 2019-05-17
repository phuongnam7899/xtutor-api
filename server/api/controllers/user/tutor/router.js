import * as expresss from 'express';
import controller from './controller';
export default expresss
        .Router()
        .get("/",controller.get)