export default class UnprocessableEntityError extends Error {
  constructor({ message = 'Unprocessable entity', statusCode = 422, code = 'SYSTEM_ERROR' } = {}) {
    super(message);
    this.code = code;
    this.message = message;
    this.statusCode = statusCode;
  }
}
