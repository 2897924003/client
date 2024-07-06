import { ssrMiddleware } from 'quasar/wrappers'
import { createProxyMiddleware } from "http-proxy-middleware";
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/developing-ssr/ssr-middlewares
export default ssrMiddleware(async ({ app, /*, resolveUrlPath, publicPath, render */ }) => {
  // something to do with the server "app"
  // 添加日志信息
  app.use((req, res, next) => {
    console.log('============++++++++++++=')
    console.log(`Request URL: ${req.url}`);
    console.log('==========+++++++++++++===')

    next();
  });

  // 设置代理中间件,注意会自动重写路径去除用于匹配的路径
  app.use('/api', createProxyMiddleware({
    target: 'https://test.opensun.asia/api',
    changeOrigin: true,
  }));})
