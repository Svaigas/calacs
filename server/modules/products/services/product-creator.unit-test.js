import ProductCreatorService from './product-creator.service';

describe('ProductCreatorService', () => {
  describe('getProductParams', () => {
    it('should return valid list of parameters', async () => {
      const bodyPayload = {
        name: 'ProductName',
        price: 10.29,
        quantity: 12,
      };

      const service = await new ProductCreatorService();
      const productParams = service.getProductParams(bodyPayload);
      assert.deepInclude(productParams, {
        title: bodyPayload.name,
        variants: [
          {
            inventory_quantity: bodyPayload.quantity,
            price: bodyPayload.price,
          },
        ],
      });
    });
  });
});
