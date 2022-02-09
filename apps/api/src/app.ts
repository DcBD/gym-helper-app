import * as express from 'express';

import { errorHandler, successHandler } from './config/morgan';

import { environment } from "./environments/environment";
import { ApiRouter} from './routes/v1';


const app = express();


// Morgan logging.
if (!environment.test) {
    app.use(successHandler);
    app.use(errorHandler);
}

// Safe logger
const failSafe = (error, req, res, next) => {
    res.status(500).send(error.message)
}

app.use(failSafe);
  

// Other
app.use(express.json())

// Routes
ApiRouter.init(app);

// TODO: Security


// TODO: 404 error

// TODO: Error handler


export default app;