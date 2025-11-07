import { Router } from 'express';
import {clientsService} from '../controllers/clients.js'

const clientsRouter = Router();

clientsRouter.get('/',  clientsService.getAll);
clientsRouter.get('/:id',  clientsService.getById);
clientsRouter.post('/',  clientsService.create);


export default clientsRouter;