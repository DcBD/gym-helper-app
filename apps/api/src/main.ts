/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import { environment } from './environments/environment.prod';
import { dbManager } from './tools/DbManager';

const app = express();

const db = dbManager.db;

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/test', (req, res) => {


  res.send({ data: "OK" });
})

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);