import { Application, Request, Response } from "express";
import CommonRoute from "../../config/common-route";
import { MeasurementUnitsController } from "../../controllers";



export class MeasurementUnitsRoutes extends CommonRoute{

    constructor(app : Application) {
        super(app, "measurement-units");
        this.init();
    }

    init() {
        this.route('list').get(MeasurementUnitsController.list);
        this.route('create').post(MeasurementUnitsController.create)
    }
}