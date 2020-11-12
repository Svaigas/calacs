import express from 'express';
import AsyncHandler from '../../../server/utils/async-handler';
import ArticlesController from './controllers/articles.controller';

const publicRoutes = express.Router();

publicRoutes.get(
    '/',
    AsyncHandler.wrap(ArticlesController.doNothing),
);

publicRoutes.post(
    '/',
    AsyncHandler.wrap(ArticlesController.doNothing),
);

publicRoutes.put(
    '/',
    AsyncHandler.wrap(ArticlesController.doNothing),
);

publicRoutes.patch(
    '/',
    AsyncHandler.wrap(ArticlesController.doNothing),
);

publicRoutes.delete(
    '/',
    AsyncHandler.wrap(ArticlesController.doNothing),
);

export default (app) => {
    app.use('/api/v1/articles', publicRoutes);
};
