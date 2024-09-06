module.exports = (options, app) => {
    return async function jwtMiddleware(ctx, next) {
        const token = ctx.request.header.authorization;
        if (!token) {
            ctx.throw(401, 'No token detected');
        }
        try {
            // console.log("=======================");
            // console.log(token);
            // console.log(options.secret);
            const decoded = app.jwt.verify(token.split(' ')[1], options.secret);
            // console.log(decoded);
            ctx.state.user = decoded;
            await next();
        } catch (err) {
            ctx.throw(401, 'Invalid token', err);
        }
    };
};