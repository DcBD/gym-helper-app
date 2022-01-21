
import { Sequelize, Options } from 'sequelize'

/**
 * Authenticates to a sequelize database.
 * @param options Options for the constructor of Sequelize main class.
 * @param errorCallback? callback after authenticate failed.
 * @returns authenticated sequelize instance.
 */
export const connect = async (options: Options, errorCallback?: (e: any) => void): Promise<Sequelize> => {
    const sequelize = new Sequelize(options);

    await sequelize.authenticate().catch(errorCallback);

    return sequelize;
}