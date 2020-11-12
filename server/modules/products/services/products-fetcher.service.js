import { shopifyConfig } from '../../../config/shopify';

const Shopify = require('shopify-api-node');

export default class ProductsFetcherService {
  constructor(config = shopifyConfig) {
    this.config = config;
  }

  async call() {
    try {
      // TODO: this below should be implemented as DI and Singleton
      // using awilix f.e.
      const shopify = new Shopify({
        shopName: this.config.shopName,
        apiKey: this.config.apiKey,
        password: this.config.password,
      });
      const results = await shopify.product.list();

      return results;
    } catch (e) {
      // TODO: logger should be implemented
      console.log(e);
    }
  }
}
