const Koa = require('koa');

const middleware = async(ctx,next) => {
    console.log("middleware");
    console.log(ctx.request.path);
    next();
}

const middleware1 = async(ctx,next) => {
    console.log("middleware1");
    console.log(ctx.request.path);
    next();
}

const middleware2 = async(ctx,next) => {
    console.log("middleware2");
    console.log(ctx.request.path);
}

const app = new Koa();

app.use(middleware);
app.use(middleware1);
app.use(middleware2);

app.listen(3000);