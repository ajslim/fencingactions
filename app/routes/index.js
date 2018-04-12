const Router = require('koa-router'),
     { getUsers, getUserById } = require('../controllers/indexController');

const router = new Router();

    router
        .get('/users',        getUsers)
        .get('/users/:id',    getUserById);

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};
