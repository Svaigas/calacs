export default class NotFoundError extends Error {
    constructor({ message = 'Not found', statusCode = 404, code = 'SYSTEM_ERROR' } = {}) {
        super(message);
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
}
