import * as express from 'express'
import CommonRoute from '../../config/common-route';
import { MeasurementUnitsRoutes } from './MeasurementUnitsRoute';


export class ApiRouter {
    private app : express.Application;


    constructor(app : express.Application) {
        this.app = app;
    }

    private initRoutes() : CommonRoute[]{
        return [
            new MeasurementUnitsRoutes(this.app)
        ];
    }

    public static init(app : express.Application) {
        const router = new ApiRouter(app);
        
        router.initRoutes();

        return router;
    }
}


