import * as express from 'express';
import { STATUS_CODES } from 'http';
import { errorHandler, successHandler } from './config/morgan';

import { environment } from "./environments/environment";


const app = express();


// Morgan logging.
if (!environment.test) {
    app.use(successHandler);
    app.use(errorHandler);
}

// TODO: Security


// TODO: 404 error

// TODO: Error handler


export default app;