
import { MeasurementUnitModel } from '@gym-helper-app/data';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


export class MeasurementUnitsController {

    /**
     * Gets Units.
     */
    public static async list(req: Request, res: Response, next: NextFunction){
        try {
            res.send({t:"Test"}).sendStatus(StatusCodes.OK);
        } catch (error) {
            next(error)
        }
    }


    public static async create(req: Request, res: Response, next: NextFunction) {
        // try {
        //     const model = await MeasurementUnitModel.build(req.body)

        // } catch (error) {
        //     console.log(error.errors);
        // }

        // res.send({});
  
            // await model.save();
        
            // res.json(model);
    }
}