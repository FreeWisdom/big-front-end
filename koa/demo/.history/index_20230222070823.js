const Koa = require("koa");
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 1、req,method,res
// ctx 是一个对象，里面有 request、response、app、originalUrl、req、res、socket
// app.use(async ctx => {
//     console.log(ctx);
//     ctx.body = "hello world"
// })

// 2、api url 执行特定 router
// router 实现不同请求路径
router.get('/', (ctx, next) => {
    ctx.body = "router a"
    console.log(ctx, next)
})

router.get('/b', (ctx, next) => {
    ctx.body = "router b"
})

// 3、koa最核心：app.use 拿着 ctx 在做什么？ async 用法
    // middleware.js   洋葱模型：req顺序执行，res反向执行，先进后出



app
    .use(router.routes())
    .use(router.allowedMethods()) // 拦截器
app.listen(3000);