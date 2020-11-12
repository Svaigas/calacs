import { shopifyConfig } from '../../../config/shopify';

const Shopify = require('shopify-api-node');

export default class ProductCreatorService {
  /**
   * @param {Object} config
   */
  constructor(config = shopifyConfig) {
    this.config = config;
  }

  /**
   * @param {Object} product
   * @returns {Object} createdProduct
   */
  async call(product) {
    try {
      // TODO: this below should be implemented as DI and Singleton
      // using awilix f.e.
      const shopify = new Shopify({
        shopName: this.config.shopName,
        apiKey: this.config.apiKey,
        password: this.config.password,
      });
      const createdProduct = await shopify.product.create(this.getProductParams(product));

      return createdProduct;
    } catch (e) {
      // TODO: logger should be implemented
      console.log(e);
    }
  }

  /**
   * @param {Object} product
   * @return {Object}
   * @private
   * */
  getProductParams(product) {
    return {
      title: product.name,
      variants: [{
        price: product.price,
        inventory_quantity: product.quantity,
      }],
    };
  }
}
