import { connect } from "@gym-helper-app/data";
import { ErrorClassification } from "@gym-helper-app/shared-types";
import { Sequelize } from "sequelize/dist";
import { environment } from "../environments/environment";

import apiLogger from "../instances/tools/Logger";


/**
 * Tools to work around with database configuration.
 */
class DbManager {

    private readonly _sequelize: Sequelize;

    private models: any[];

    constructor() {
        this._sequelize = this.initSequelize()
    }

    private initSequelize(): Sequelize | null {
        console.log("Dasdassdaa");

        connect(environment.database, (e) => {
            apiLogger.error(ErrorClassification.DATABASE, 'Database connection error:', e.message)

            throw Error(`Database connection error: ${e.message}`)
        });

        return null;
    }

    /**
     * Gets sequelize instance.
     */
    public get sequelize(): Sequelize {
        return this._sequelize;
    }

    public initModels(models: any[]): void {
        this.models = models;

        // models.map(model => model.init().sync())

        this.afterInitModels();
    }

    private afterInitModels(): void {
        if (apiLogger.isDebugMode) {
            apiLogger.table(this.models.map(m => m.name), "Initialized models:")
        }
    }

    public get db(): Sequelize {
        return this._sequelize;
    }


}

export const dbManager = new DbManager();