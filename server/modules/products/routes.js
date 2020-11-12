import express from 'express';
import AsyncHandler from '../../utils/async-handler';
import ProductsController from './controllers/products.controller';

const publicRoutes = express.Router();

publicRoutes.get(
  '/',
  AsyncHandler.wrap(ProductsController.list),
);

publicRoutes.post(
    '/',
    AsyncHandler.wrap(ProductsController.doNothing),
);

publicRoutes.get(
    '/:id',
    AsyncHandler.wrap(ProductsController.list),
);

publicRoutes.put(
  '/:id',
  AsyncHandler.wrap(ProductsController.doNothing),
);

publicRoutes.patch(
  '/:id',
  AsyncHandler.wrap(ProductsController.doNothing),
);

publicRoutes.delete(
  '/:id',
  AsyncHandler.wrap(ProductsController.doNothing),
);

export default (app) => {
  app.use('/api/v1/products', publicRoutes);
};
