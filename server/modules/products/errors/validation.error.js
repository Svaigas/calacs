export default class ValidationError extends Error {
    constructor({ message = 'Validation error', statusCode = 400, code = 'USER_ERROR' } = {}) {
        super(message);
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
}
