/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1725415821256_3563';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // jwt 配置
  config.jwt = {
    secret: '20240904',
    expiresIn: '1d',
  };

  // 配置 mongoose
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/photo-management-db',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.cors = {
    origin: '*', // 允许所有来源，你可以设置为具体的域名，例如 'http://localhost:8080'
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', // 允许的 HTTP 方法
    credentials: true, // 允许携带 Cookie 或其他凭证
  };
  config.multipart = {
    mode: 'file',
  };
  return {
    ...config,
    ...userConfig,
  };
};
