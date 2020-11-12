import express from 'express';

export default {
  init: (app) => {
    app.use(express.json({ strict: true, type: 'application/json' }));
  },
};
