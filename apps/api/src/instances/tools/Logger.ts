import { Logger } from "@gym-helper-app/tools";
import { environment } from "../../environments/environment";


/**
 * Api logger instance
 */
const apiLogger = new Logger(!environment.production);

export default apiLogger;