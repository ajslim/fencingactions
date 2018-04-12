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

async function createUser (ctx, next) {
    ctx.body = await myDb.createUser(ctx.request.body.username);
    ctx.status = 201;
    await next();
}

async function updateUserById (ctx, next) {
    ctx.body = await myDb.updateUserById(ctx.params.id, ctx.request.body.username);
    await next();
}

async function deleteUserById (ctx, next) {
    await myDb.deleteUserById(ctx.params.id);
    ctx.status = 204;
    await next();
}

module.exports = { getUsers, getUserById, createUser, updateUserById, deleteUserById };
