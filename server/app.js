import express from 'express';
import routes from './modules/routes';

const app = express();

// Add routes
routes.productsRoutes(app);

module.exports = app;
