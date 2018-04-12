"use strict";

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost/fencing_actions');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

const Action = sequelize.define('action', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    url: {
        type: Sequelize.STRING
    }
});

// Don't return passwords
const userAttributes = ['id', 'username'];

module.exports = {

    // This is used by the auth function
    getFullUserByUsername: (username) => User.findOne({ where: { username } }),

    getUsers: () => User.findAll({ attributes: userAttributes }),
    getUserById: (id) => User.findOne({ attributes: userAttributes, where: { id } }),
    createUser: (username, password) => User.create({ username, password }),
    updateUserById: (id, username, password) => User.update({ username, password }, { where: { id } }),
    deleteUserById: (id) => User.destroy({ where: { id }}),

    getActions: () => Action.findAll(),
    getActionById: (id) => Action.findOne({ where: { id } }),
    createAction: (url) => Action.create({ url }),
    updateActionById: (id, url) => Action.update({ url }, { where: { id } }),
    deleteActionById: (id) => Action.destroy({ where: { id }}),
};
