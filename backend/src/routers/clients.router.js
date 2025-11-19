import { Router } from 'express';
import {clientsService} from '../controllers/controller.clients.js'

const clientsRouter = Router();

clientsRouter.get('/',  clientsService.getAll);
clientsRouter.get('/:id',  clientsService.getById);
clientsRouter.post('/',  clientsService.create);
clientsRouter.post('/:id/projects',  clientsService.addProject);
clientsRouter.delete('/:clientId/projects/:projectId',  clientsService.deleteProject);


export default clientsRouter;