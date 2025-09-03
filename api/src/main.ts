/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

import { router as authRouter } from './routes/auth';
import { router as playersRouter } from './routes/players';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to nhl-fanteasy api' });
});

app.use('/api/auth', authRouter);
app.use('/api/players', playersRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
