export default {
  wrap: (fn) => (req, res, next) => {
    try {
      return Promise.resolve(fn(req, res, next)).catch((e) => next(e));
    } catch (e) {
      next(e);
    }
  },
};
