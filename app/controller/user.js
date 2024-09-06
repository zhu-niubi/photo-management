const Controller = require('egg').Controller;

class UserController extends Controller {
    async register() {
        const { ctx } = this;
        const { username, password, phone } = ctx.request.body; // 接收手机号参数
        const result = await ctx.service.user.register(username, password, phone);
        ctx.body = result;
    }

    async login() {
        const { ctx } = this;
        const { username, password } = ctx.request.body;
        const result = await ctx.service.user.login(username, password);
        ctx.body = result;
    }
}

module.exports = UserController;