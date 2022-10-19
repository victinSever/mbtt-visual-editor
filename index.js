// 安装npm i koa -s
// 安装 npm install --save koa-router
import Koa from "koa";
// npm i koa-static-cache -s 静态文件请求
import KoaStaticCache from "koa-static-cache";
// npm i koa-body-parser -s
import bodyParser from "koa-body-parser";
var app = new Koa();
// 引入路由
import router from "./src/routers/mform.router.js";

// Koa 错误处理中间件
// 无论app.use放到路由前面还是后面
// 都是先执行app.use再去执行路由
app.use(async (ctx, next) => {
  console.log("这是一个中间件",ctx); // 执行顺序1
  await next();
  if (ctx.status == 404) {
    // 执行顺序3
    ctx.body = "404: NOT Found!";
  } else {
    console.log(ctx.url);
  }
});

// 静态文件的请求(一般针对服务端渲染用的多)
// app.use(
//   KoaStaticCache(__dirname + "/static", {
//     prefix: "/static",
//     maxAge: false,
//     gzip: true,
//   })
// );

// 对post请求的解析
app.use(bodyParser({}));

// 启动路由(来自于官方文档);
// router.allowedMethods()可以配置也可以不配置。
// 如果之前的没有设置响应头，配置此选项以后可以自动设置响应头。
app.use(router.routes());
// app.use(router.allowedMethods());

// 监听端口
var port = 8080;
app.listen(port, function () {
  console.log("Server listening on port " + port, `http://localhost:${port}/`);
});
