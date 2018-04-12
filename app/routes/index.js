const Router = require('koa-router');
const KoaBody = require('koa-body');
const { getUsers, getUserById, createUser, updateUserById, deleteUserById } = require('../controllers/userController');
const { getActions, getActionById, createAction, updateActionById, deleteActionById } = require('../controllers/actionController');

const router = new Router();

    router
        .get('/users',        getUsers)
        .get('/users/:id',    getUserById)
        .post('/users/',      KoaBody(), createUser)
        .put('/users/:id',    KoaBody(), updateUserById)
        .delete('/users/:id', deleteUserById)

        .get('/actions',        getActions)
        .get('/actions/:id',    getActionById)
        .post('/actions/',      KoaBody(), createAction)
        .put('/actions/:id',    KoaBody(), updateActionById)
        .delete('/actions/:id', deleteActionById);

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};
