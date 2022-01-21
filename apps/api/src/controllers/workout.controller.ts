import { Request, Response } from "express";

/**
 * Handles Workout routes.
 */
export class WorkoutController {

    public getWorkout = (req: Request, res: Response): void => {
        const workout = {

        };

        res.send(workout);
    }
}