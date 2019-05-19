import Controller from './controller';
import * as express from 'express';

export default express
                .Router()
                .get('/:id', Controller.getOne)
                .delete('/:id',Controller.delete)
