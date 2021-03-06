import _ from 'lodash';
import { StatusCodes } from 'http-status-codes';

import ProductsFetcherService from '../services/products-fetcher.service';
import ProductCreatorService from '../services/product-creator.service';
import ProductSerializer from '../serializers/product.serializer';

export default class ProductsController {
  /**
   * @param {import('express').Request<any>} req
   * @param {import('express').Response<any>} res
   */
  static async list(req, res) {
    const products = await new ProductsFetcherService().call();

    res.status(StatusCodes.OK).json(
      _.map(products, (insurance) =>
        new ProductSerializer(insurance).call()),
    );
  }

  /**
   * @param {import('express').Request<any>} req
   * @param {import('express').Response<any>} res
   */
  static async create({ body }, res) {
    const product = await new ProductCreatorService().call(body);

    res.status(StatusCodes.CREATED).json(new ProductSerializer(product).call());
  }

  /**
   * @param {import('express').Request<any>} req
   * @param {import('express').Response<any>} res
   */
  static async doNothing(req, res) {
    res.json({});
  }
}
