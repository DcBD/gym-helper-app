
import { Sequelize, Options } from 'sequelize'

/**
 * Authenticates to a sequelize database.
 * @param options Options for the constructor of Sequelize main class.
 * @returns authenticated sequelize instance.
 */
export const connect = (options: Options): Sequelize => {
    const sequelize = new Sequelize(options);

    sequelize.authenticate();

    return sequelize;
}