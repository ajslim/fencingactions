const auth = require('basic-auth');
const db = require('../managers/db');
const bcrypt = require('bcrypt');

module.exports = async (ctx, next) => {
    const credentials = auth(ctx);
    const username = credentials.name;
    const submittedPassword = credentials.pass;
    const user = await db.getFullUserByUsername(username);
    const validPassword = bcrypt.compareSync(submittedPassword, user.password);

    if (!validPassword) {
        ctx.status = 401;
        ctx.set('WWW-Authenticate', 'Basic');
        ctx.body = 'Unauthorised';
    } else {
        await next();
    }
};