import express from 'express';
import routes from './modules/routes';

const app = express();

// Add routes
routes.articlesRoutes(app);

module.exports = app;
