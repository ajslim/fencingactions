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
    }
});

module.exports = {
    getUsers: () => User.findAll(),
    getUserById: (id) => User.findOne({ where: { id } }),
    createUser: (username) => User.create({ username }),
    updateUserById: (id, username) => User.update({ username }, { where: { id } }),
    deleteUserById: (id) => User.destroy({ where: { id }})
};
