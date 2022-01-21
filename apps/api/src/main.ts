import { Logger } from '@gym-helper-app/tools';
import * as express from 'express';
import app from './app';
import { environment } from './environments/environment';
import apiLogger from './instances/tools/Logger';
import { dbManager } from './tools/DbManager';



dbManager.init().then(() => {
    apiLogger.log("Connected to Database");

    app.listen(environment.port, () => {
        apiLogger.log(`Listening at http://localhost:${environment.port}/api`);
    })
});








// import { environment } from './environments/environment.prod';
// import { dbManager } from './tools/DbManager';

// const app = express();

// const db = dbManager.db;

// app.get('/api', (req, res) => {
//   res.send({ message: 'Welcome to api!' });
// });

// app.get('/test', (req, res) => {


//   res.send({ data: "OK" });
// })

// const port = process.env.port || 3333;
// const server = app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}/api`);
// });
// server.on('error', console.error);