
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


export class TestController {

    /**
     * Gets Test.
     */
    public getTest = (req: Request, res: Response, next: NextFunction): void => {
        try {
            res.sendStatus(StatusCodes.OK);
        } catch (error) {
            next(error)
        }
    }
}