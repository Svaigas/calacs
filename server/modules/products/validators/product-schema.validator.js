import Joi from 'joi';

export const productSchemaValidator = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().positive().required(),
  quantity: Joi.number().integer().positive().required(),
});
