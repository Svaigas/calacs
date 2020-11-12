import { StatusCodes } from 'http-status-codes';

describe('POST /api/v1/products', () => {
  it('should return validation errors, if wrong data specified', async () => {
    const payload = {
      price: 'abc',
      name: 12.33,
      quantity: 'abc',
    };

    await request(app)
      .post('/api/v1/products')
      .send(payload)
      .expect(StatusCodes.BAD_REQUEST)
      .expect(({ error: { text } }) => {
        assert.isTrue(text.includes('price'));
        assert.isTrue(text.includes('name'));
        assert.isTrue(text.includes('quantity'));
      });
  });
});
