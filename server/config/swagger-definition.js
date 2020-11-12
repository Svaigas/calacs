module.exports = {
  openapi: '3.0.1',
  info: {
    title: 'calacS API',
    version: 'v1',
    description: 'calacS API',
    contact: { name: 'Mateusz Adamiec adamiecmateusz@wp.pl' },
  },
  components: {},
  security: [{ apiKeyAuth: [] }],
  apis: ['server/modules/*/routes.js', 'server/modules/*/routes/*.routes.js'],
};
