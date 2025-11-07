import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import clientsRouter  from './routers/clients.router.js';
import summaryRouter from './routers/summary.router.js';
import { send } from './utils.js';
import { errorMsg } from './errors/errMsg.js';

const app = express();
const PORT = process.env.PORT || 5454;

app.use(cors());
app.use(express.json());

app.use('/api/clients', clientsRouter);
app.use('/api/summary', summaryRouter);

app.use((_req, res) => {
  send(res, 404, { message: errorMsg.notFound.url });
});


app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});