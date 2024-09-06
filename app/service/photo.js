const Service = require('egg').Service;
const OSS = require('ali-oss'); // 假设你使用阿里云 OSS

class PhotoService extends Service {
    async upload(userId, file, tags, title, description) {
        const { ctx } = this;

        const client = new OSS({
            accessKeyId: process.env.ALIBABA_ACCESS_KEY_ID,
            accessKeySecret: process.env.ALIBABA_ACCESS_KEY_SECRET,
            bucket: process.env.ALIBABA_BUCKET,
            endpoint: process.env.ALIBABA_ENDPOINT,
            secure: true,
        });

        let result;
        try {
            result = await client.put(file.filename, file.filepath);
        } catch (err) {
            ctx.logger.error('OSS upload error:', err);
            return { success: false, message: 'Upload to OSS failed' };
        }
        const url = result.url;

        const Photo = ctx.model.Photo;
        const photo = new Photo({
            userId,
            url,
            tags,
            title,
            description,
        });

        await photo.save();

        return { success: true, message: 'Photo uploaded successfully', url };
    }

    async search(userId, keyword) {
        const Photo = this.ctx.model.Photo;
        const photos = await Photo.find({
            userId,
            tags: { $regex: keyword, $options: 'i' },
        });
        return { success: true, photos };
    }
}

module.exports = PhotoService;