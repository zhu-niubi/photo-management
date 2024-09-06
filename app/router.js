/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/register', controller.user.register);
  router.post('/api/login', controller.user.login);

  const jwtMiddleware = app.middleware.jwt(app.config.jwt,app);

  router.post('/api/photo/upload', jwtMiddleware, controller.photo.upload);
  router.get('/api/photo/search', jwtMiddleware, controller.photo.search);
};
