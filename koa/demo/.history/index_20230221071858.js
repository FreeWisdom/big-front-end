const Koa = require("koa");
const Router = require('Router');

const router = new Router();
const app = new Koa();

// req,method,res
    // ctx 是一个对象，里面有 request、response、app、originalUrl、req、res、socket
    app.use(async ctx => {
        console.log(ctx);
        ctx.body = "hello world"
    })

// api url 执行特定方法 router
    // router 实现不同请求路径
    router.get('/', (ctx, next) => {
        ctx.body = "router a"
        console.log(ctx, next)
    })

    router.get('/b', (ctx, next) => {
        ctx.body = "router b"
    })

// ctx async 用法

app.use(router.routes())
.use(router.allowedMethods())
app.listen(3000);