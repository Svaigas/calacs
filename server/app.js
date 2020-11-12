import express from 'express';
import appInitializer from './config/app-initializer';
import routes from './modules/routes';

const app = express();

// Init application
appInitializer.init(app);

// Add routes
routes.productsRoutes(app);

module.exports = app;
