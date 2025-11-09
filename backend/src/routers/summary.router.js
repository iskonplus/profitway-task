import { Router } from 'express';
import { summaryService } from '../controllers/controller.summary.js';

const summaryRouter = Router();

summaryRouter.get('/', summaryService.getSummary);


export default summaryRouter;