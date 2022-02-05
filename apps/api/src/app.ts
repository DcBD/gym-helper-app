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

// Other
app.use(express.json())

// Routes
ApiRouter.init(app);

// TODO: Security


// TODO: 404 error

// TODO: Error handler


export default app;