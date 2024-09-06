const Controller = require('egg').Controller;

class PhotoController extends Controller {
    async upload() {
        const { ctx } = this;
        const { tags, title, description } = ctx.request.body;
        const userId = ctx.state.user.id;
    
        // 打印请求的 body 和文件
        // console.log('Request body:', ctx.request.body);
        // console.log('Uploaded files:', ctx.request.files);
    
        // 从 request.files 中获取文件
        const file = ctx.request.files[0];
        if (!file) {
            ctx.throw(400, 'No file uploaded');
        }
    
        const result = await ctx.service.photo.upload(userId, file, tags, title, description);
        ctx.body = result;
    }

    async search() {
        const { ctx } = this;
        const { keyword } = ctx.query;
        const userId = ctx.state.user.id;

        const result = await ctx.service.photo.search(userId, keyword);
        ctx.body = result;
    }
}

module.exports = PhotoController;