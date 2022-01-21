import { ErrorClassification } from '@gym-helper-app/shared-types';
import * as morgan from 'morgan';
import { environment } from '../environments/environment';
import apiLogger from '../instances/tools/Logger';

const ipFormat = environment.production ? ':remote-addr - ' : '';

const successResponseFormat = `${ipFormat}:method :url :status - :response-time ms`;
const errorResponseFormat = `${ipFormat}:method :url :status - :response-time ms - message :message`;


export const successHandler = morgan(successResponseFormat, {
    skip: (req, res) => res.statusCode >= 400,
    stream: { write: (message) => apiLogger.log(message.trim) }
});

export const errorHandler = morgan(errorResponseFormat, {
    skip: (req, res) => res.statusCode < 400,
    stream: { write: (message) => apiLogger.error(ErrorClassification.API, message.trim()) },
});

