const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api', 
        { target: 'http://dataservice.accuweather.com/locations/v1/', "pathRewrite": { "^/api": "" }}
    ));
}