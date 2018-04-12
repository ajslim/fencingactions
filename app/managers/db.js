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

// Don't return passwords
const userAttributes = ['id', 'username'];

module.exports = {
    getUsers: () => User.findAll({ attributes: userAttributes }),
    getUserById: (id) => User.findOne({ attributes: userAttributes, where: { id } }),

    // This is used by the auth function
    getFullUserByUsername: (username) => User.findOne({ where: { username } }),

    createUser: (username, password) => User.create({ username, password }),
    updateUserById: (id, username, password) => User.update({ username, password }, { where: { id } }),
    deleteUserById: (id) => User.destroy({ where: { id }}),
};
