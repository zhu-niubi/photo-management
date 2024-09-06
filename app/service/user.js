const Service = require('egg').Service;
const bcrypt = require('bcryptjs');

class UserService extends Service {
    async register(username, password, phone) {
        const User = this.ctx.model.User;

        const phoneRegex = /^[1]([3-9])[0-9]{9}$/;
        if (!phoneRegex.test(phone)) {
            return { success: false, message: 'Invalid phone number format' };
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return { success: false, message: 'Username already exists' };
        }

        const existingPhone = await User.findOne({ phone });
        if (existingPhone) {
            return { success: false, message: 'Phone number already exists' };
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const user = new User({ username, password: hash, phone });
        await user.save();

        return { success: true, message: 'User registered successfully' };
    }

    async login(username, password) {
        const User = this.ctx.model.User;

        const user = await User.findOne({ username });
        if (!user) {
            return { success: false, message: '用户不存在' };
        }

        const valid = bcrypt.compareSync(password, user.password);
        if (!valid) {
            return { success: false, message: '密码错误' };
        }

        const token = this.ctx.app.jwt.sign({ id: user._id }, this.ctx.app.config.jwt.secret, { expiresIn: '1d' });

        return { success: true, token };
    }
}

module.exports = UserService;