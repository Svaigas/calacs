export default class ProductVariantSerializer {
  constructor(productVariant) {
    this.productVariant = productVariant;
  }

  call() {
    return {
      availableQuantity: this.productVariant.inventory_quantity,
      id: this.productVariant.id,
      price: this.productVariant.price,
      name: this.productVariant.title,
    };
  }
}
