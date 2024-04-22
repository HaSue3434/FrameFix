const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // 변경된 경로
    createProxyMiddleware({
      target: 'http://localhost:8080',	
      changeOrigin: true,
    })
  );
};