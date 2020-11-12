import { shopifyConfig } from '../../../config/shopify';

export default class ProductCreatorService {
  constructor(config = shopifyConfig) {
    this.config = config;
  }

  call(){
    return {};
  }
}
