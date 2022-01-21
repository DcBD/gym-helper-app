import * as express from 'express'

const router = express.Router();

/**
 * Route definition.
 */
interface Route {
    path: string,
    route: express.Router
}

/**
 * Api default routes
 */
const routes: Route[] = [
];


/**
 * Routes available in development environment.
 */
const devRoutes: Route[] = [

]

