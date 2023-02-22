const Koa = require("koa");
const app = new Koa();

// req,method,res
// api url 执行特定方法 router
// ctx async 用法
app.use(async ctx => {
    ctx.body = "hello world"
})

app.listen(3000);