const myDb = require('../managers/testDbManager');

/**
* @example curl -XGET "http://localhost:8081/users"
*/
async function getUsers (ctx, next) {
    ctx.body = await myDb.getUsers();
    await next();
}

async function getUserById (ctx, next) {
    ctx.body = await myDb.getUserById(ctx.params.id);
    await next();
}

module.exports = { getUsers, getUserById };
