/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { connect } from '@gym-helper-app/data'
import { environment } from './environments/environment.prod';
import db from './instances/database/db';
import dbInit from './instances/database/init';

const app = express();

const sequelize = connect(environment.database);

dbInit(sequelize);

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