const swaggerDefinition = require('./swagger-definition');

module.exports = {
    swaggerDefinition,
    basePath: '/',
    apis: ['server/modules/*/routes.js', 'server/modules/*/routes/*.routes.js', 'docs/*.yaml'],
};
