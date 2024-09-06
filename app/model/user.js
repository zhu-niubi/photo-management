module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phone: { type: String, required: true, unique: true }, // 新增手机号字段，并设置唯一性
    });

    return mongoose.model('User', UserSchema);
};