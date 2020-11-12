import express from 'express';
import AsyncHandler from '../../utils/async-handler';
import ProductsController from './controllers/products.controller';

import { productSchemaValidator } from './validators/product-schema.validator';

const publicRoutes = express.Router();
const validator = require('express-joi-validation').createValidator({});

publicRoutes.get(
  '/',
  AsyncHandler.wrap(ProductsController.list),
);

publicRoutes.post(
  '/',
  validator.body(productSchemaValidator),
  AsyncHandler.wrap(ProductsController.create),
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
