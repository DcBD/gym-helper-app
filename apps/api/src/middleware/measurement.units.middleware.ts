import { MeasurementUnitModel } from "@gym-helper-app/data";
import { NextFunction, Request, Response } from "express";
import ErrorResponse from "../common/ErrorResponse";



export default class MeasurementUnitsMiddleware {

    public static async exists(req: Request, res: Response, next: NextFunction) {
        const {body : {id}} = req;

        const exists = await MeasurementUnitModel.count({
            where: {
                id: id
            }
        });

        if(exists > 0) {
            res.status(400).send(new ErrorResponse("Measurement unit already exists."));
        } else {
            next();
        }
    }
    
}