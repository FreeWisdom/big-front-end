const Koa = require("koa");
const app = new Koa();

// req,method,res
// ctx 是一个对象，里面有 request、response、app、originalUrl、req、res、socket
// api url 执行特定方法 router
// ctx async 用法

app.use(async ctx => {
    console.log(ctx);
    ctx.body = "hello world"
})

app.listen(3000);