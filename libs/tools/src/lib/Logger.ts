import { ErrorClassification } from "@gym-helper-app/shared-types";


/**
 * Tool for logging messages in application.
 */
export class Logger {

    private readonly _isDebugMode: boolean;

    constructor(debugMode: boolean) {
        this._isDebugMode = debugMode;
    }

    /**
     * Gets debug mode.
     */
    public get isDebugMode(): boolean {
        return this._isDebugMode;
    }

    /**
     * Prints to stdout with newline if app is in development.
     * @param message a message to log.
     */
    public log(...message: any): void {
        if (this.isDebugMode) {
            console.log(message);
        }
    }

    /**
     * This method does not display anything unless used in the inspector. Prints to stdout the array array formatted as a table.
     * @param tabularData a tabular data to log.
     */
    public table(tabularData: any, title?: string): void {
        if (this.isDebugMode) {
            if (title) {
                console.info(title)
            }

            console.table(tabularData)
        }
    }

    public error(classification: ErrorClassification, ...data: any[]) {

        console.log(`[\x1b[31m${ErrorClassification[classification]}\x1b[0m]`, data);
    }
}
