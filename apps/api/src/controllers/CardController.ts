
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


export class CardController {

    /**
     * Gets Card.
     */
    public getCard = (req: Request, res: Response, next: NextFunction): void => {
        try {
            res.sendStatus(StatusCodes.OK);
        } catch (error) {
            next(error)
        }
    }
}