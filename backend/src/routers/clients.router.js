import { Router } from 'express';
import {clientsService} from '../controllers/clients.js'

const clientsRouter = Router();

clientsRouter.get('/', await clientsService.getAll(res, req));
clientsRouter.post('/', await clientsService.create(res, req));


export default clientsRouter;