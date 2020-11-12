import { shopifyConfig } from '../../../config/shopify';

const Shopify = require('shopify-api-node');

export default class ProductsFetcherService {
  constructor(config = shopifyConfig) {
    this.config = config;
  }

  async call() {
    try {
      const shopify = new Shopify({
        shopName: this.config.shopName,
        apiKey: this.config.apiKey,
        password: this.config.password,
      });
      const results = await shopify.product.list({ limit: 5 });
      return results;
    } catch (e) {

    }
  }
}
