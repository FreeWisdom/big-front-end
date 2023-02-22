const Koa = require('koa');

const middeware = async(ctx) => {
    console.log("ctx");
}

const app = new Koa();

App.use(middeware);