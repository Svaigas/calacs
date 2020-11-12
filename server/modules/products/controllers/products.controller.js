import _ from 'lodash';
import { StatusCodes } from 'http-status-codes';

import ProductsFetcherService from '../services/products-fetcher.service';
import ProductCreatorService from '../services/product-creator.service';
import ProductSerializer from '../serializers/product.serializer';

export default class ProductsController {
  static async list(req, res) {
    const products = await new ProductsFetcherService().call();

    res.status(StatusCodes.OK).json(
      _.map(products, (insurance) =>
        new ProductSerializer(insurance).call()),
    );
  }

  static async create(req, res) {
    const product = new ProductCreatorService().call();
    res.json({});
  }

  static async doNothing(req, res) {
    res.json({});
  }
}