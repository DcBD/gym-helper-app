import { connect } from "@gym-helper-app/data";
import { ErrorClassification } from "@gym-helper-app/shared-types";
import { Sequelize } from "sequelize/dist";
import { environment } from "../environments/environment";

import apiLogger from "../instances/tools/Logger";


/**
 * Tools to work around with database configuration.
 */
class DbManager {

    private _sequelize: Sequelize;

    private models: any[];


    public init(): Promise<Sequelize> {
        return connect(environment.database, (e) => {
            apiLogger.error(ErrorClassification.DATABASE, 'Database connection error:', e.message)

            throw Error(`Database connection error: ${e.message}`)
        }).then(sequelize => this.sequelize = sequelize)
    }

    /**
     * Gets sequelize instance.
     */
    public get sequelize(): Sequelize {
        return this._sequelize;
    }

    /**
     * Gets sequelize instance
     */
    private set sequelize(sequelize: Sequelize) {
        this._sequelize = sequelize;
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