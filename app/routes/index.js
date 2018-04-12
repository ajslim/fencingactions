const Router = require('koa-router'),
      KoaBody = require('koa-body'),
     { getUsers, getUserById, createUser, updateUserById, deleteUserById } = require('../controllers/indexController');

const router = new Router();

    router
        .get('/users',        getUsers)
        .get('/users/:id',    getUserById)
        .post('/users/',      KoaBody(), createUser)
        .put('/users/:id',    KoaBody(), updateUserById)
        .delete('/users/:id', deleteUserById);

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};
