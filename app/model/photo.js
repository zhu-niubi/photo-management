module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const PhotoSchema = new Schema({
        userId: { type: mongoose.Schema.Types.ObjectId, required: true },
        url: { type: String, required: true },
        tags: { type: [String], required: true },
        title: { type: String, required: true }, // 新增标题字段
        description: { type: String, required: true }, // 新增描述字段
    });

    return mongoose.model('Photo', PhotoSchema);
};