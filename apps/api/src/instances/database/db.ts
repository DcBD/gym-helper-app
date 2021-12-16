import { connect } from "@gym-helper-app/data";
import { Sequelize } from "sequelize/dist";
import { environment } from "../../environments/environment";

/**
 * Sequelize database instance.
 */
const db: Sequelize = connect(environment.database);



export default db;