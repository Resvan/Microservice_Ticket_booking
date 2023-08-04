import { CustomError } from "./custome-error";

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Error connecting Database';
    constructor(){
        super('Error connection to database');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }

    serializeErrors() {
        return [
            { message : this.reason }
        ]
    }
}