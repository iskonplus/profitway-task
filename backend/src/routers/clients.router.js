import { Router } from 'express';
import {clientsService} from '../controllers/clients.js'

const clientsRouter = Router();

clientsRouter.get('/',  clientsService.getAll);
clientsRouter.post('/',  clientsService.create);


export default clientsRouter;