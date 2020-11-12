import _ from 'lodash';
import ProductVariantSerializer from './product-variant.serializer';

export default class ProductSerializer {
  constructor(product) {
    this.product = product;
  }

  call() {
    return {
      id: this.product.id,
      imageURL: this.product.image.src,
      name: this.product.title,
      variants: _.map(this.product.variants, (variant) => new ProductVariantSerializer(variant).call()),
    };
  }
}
