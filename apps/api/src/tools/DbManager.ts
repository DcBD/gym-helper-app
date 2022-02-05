import { connect, MeasurementUnitModel, measurementUnitTableDefinition, UserModel, userTableDefinition } from "@gym-helper-app/data";
import { ErrorClassification } from "@gym-helper-app/shared-types";
import { Sequelize } from "sequelize/dist";
import { environment } from "../environments/environment";

import apiLogger from "../instances/tools/Logger";


const models = [
    [UserModel, userTableDefinition, 'users'],
    [MeasurementUnitModel, measurementUnitTableDefinition, 'measurement-units']
];


/**
 * Tools to work around with database configuration.
 */
class DbManager {

    private _sequelize: Sequelize;

    public init(): Promise<Sequelize> {
        return connect(environment.database, (e) => {
            apiLogger.error(ErrorClassification.DATABASE, 'Database connection error:', e.message)

            throw Error(`Database connection error: ${e.message}`)
        })
        .then(sequelize => {
            this.sequelize = sequelize;

            this.initModels()

            return sequelize;
        });
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

    public initModels(): void {
        const sequelize = this.sequelize;

        models.map(definition => {
            const model : any = definition[0];
            const tableDefinition = definition[1];
            const tableName = definition[2];

            model.init(tableDefinition, {sequelize: sequelize, tableName: tableName}).sync();
        })

        this.afterInitModels();
    }

    private afterInitModels(): void {
        if (apiLogger.isDebugMode) {
            apiLogger.table(models.map(definition => {
                const model : any = definition[0];

                return model.name;
            } ), "Initialized models:")
        }
    }

    public get db(): Sequelize {
        return this._sequelize;
    }


}

export const dbManager = new DbManager();