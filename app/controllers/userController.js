const db = require('../managers/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
* @example curl -XGET "http://localhost:8081/users"
*/
async function getUsers (ctx, next) {
    ctx.body = await db.getUsers();
    await next();
}

async function getUserById (ctx, next) {
    ctx.body = await db.getUserById(ctx.params.id);
    await next();
}

async function createUser (ctx, next) {
    const password = bcrypt.hashSync(ctx.request.body.password, saltRounds);

    ctx.body = await db.createUser(ctx.request.body.username, password);
    ctx.status = 201;
    await next();
}

async function updateUserById (ctx, next) {
    const password = bcrypt.hashSync(ctx.request.body.password, saltRounds);

    ctx.body = await db.updateUserById(ctx.params.id, ctx.request.body.username, password);
    await next();
}

async function deleteUserById (ctx, next) {
    await db.deleteUserById(ctx.params.id);
    ctx.status = 204;
    await next();
}

module.exports = { getUsers, getUserById, createUser, updateUserById, deleteUserById };
