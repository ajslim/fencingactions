const db = require('../managers/db');

async function getActions (ctx, next) {
    ctx.body = await db.getActions();
    await next();
}

async function getActionById (ctx, next) {
    ctx.body = await db.getActionById(ctx.params.id);
    await next();
}

async function createAction (ctx, next) {
    ctx.body = await db.createAction(ctx.request.body.url);
    ctx.status = 201;
    await next();
}

async function updateActionById (ctx, next) {
    ctx.body = await db.updateActionById(ctx.params.id, ctx.request.body.url);
    await next();
}

async function deleteActionById (ctx, next) {
    await db.deleteActionById(ctx.params.id);
    ctx.status = 204;
    await next();
}

module.exports = { getActions, getActionById, createAction, updateActionById, deleteActionById };
