import { MeasurementUnitModel, measurementUnitTableDefinition, UserModel, userTableDefinition } from "@gym-helper-app/data";
import { Model, ModelAttributes, Sequelize, } from "sequelize/dist";
import { dbManager } from "../../tools/DbManager";

// const dbInit = (sequelize: Sequelize) => Promise.all([
//     UserModel.init(userTableDefinition, { sequelize }).sync(),
//     MeasurementUnitModel.init(measurementUnitTableDefinition, { sequelize }).sync()
// ])

const dbInit = (sequelize: Sequelize) => {
    dbManager.initModels([
        UserModel,
        MeasurementUnitModel
    ])
}
export default dbInit;