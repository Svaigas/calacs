import express from 'express';
import { StatusCodes } from 'http-status-codes';

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerOptions = require('./swagger');
const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default {
  init: (app) => {
    app.use(express.json({ strict: true, type: 'application/json' }));
    // Swagger ui documentation
    app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/hello', (req,res) => res.status(StatusCodes.OK).json({ serverResponse: 'Working. Hello.'}));
  },
};
