/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { connect } from '@gym-helper-app/data'
import { environment } from './environments/environment.prod';

const app = express();
const database = connect(environment.database);

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