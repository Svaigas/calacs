import express from 'express';
import { StatusCodes } from 'http-status-codes';

export default {
  init: (app) => {
    app.use(express.json({ strict: true, type: 'application/json' }));
    // Home page
    app.get('/hello', (req,res) => res.status(StatusCodes.OK).json({ serverResponse: 'Working. Hello.'}));
  },
};
