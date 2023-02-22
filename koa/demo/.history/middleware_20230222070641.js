const Koa = require('koa');

// 洋葱模型：next前顺序执行，next后反向执行，先进后出
const middleware = async(ctx,next) => {
    console.log("middleware");
    console.log(ctx.request.path);
    next();
    console.log("middleware-end");
}

const middleware1 = async(ctx,next) => {
    console.log("middleware1");
    console.log(ctx.request.path);
    next();
    console.log("middleware1-end");
}

const middleware2 = async(ctx,next) => {
    console.log("middleware2");
    console.log(ctx.request.path);
}

// middleware
// middleware1
// middleware2
// middleware1-end
// middleware-end

const app = new Koa();

app.use(middleware);
app.use(middleware1);
app.use(middleware2);

app.listen(3000);