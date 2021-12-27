
import { Sequelize } from "sequelize/dist";

import { dbManager } from "../../tools/DbManager";

/**
 * Sequelize database instance.
 */
const db: Sequelize = dbManager.db;



export default db;