const cors = require("@koa/cors");
const Koa = require("koa");
const { default: koaBody } = require("koa-body");
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

// 3、koa最核心：app.use 拿着 ctx 在做什么?
// 见 middleware.js
// 洋葱模型：req顺序执行，res反向执行，先进后出

// 4、koa为何使用 async awaite？解决了什么问题
// async 表示函数里有异步操作、await 表示紧跟在后面的表达式需要等待结果
// 解决了回调地狱问题
// 调用接口后需要处理数据等需要时间，进行异步处理
router.get('/async', async (ctx, next) => {
    let result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2s2s2s2s2s2s");
        }, 2000)
    })
    ctx.body = result;
})

// 5、restful api
router.post('/post', async (ctx) => {
    let { body } = ctx.request;   // 用户传来的body
    console.log("body", body);
    ctx.body = {     // 返回给用户的body
        req: "hy",
        ...body
    }
})


app
    .use(koaBody())
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods()) // 拦截器
app.listen(3000);