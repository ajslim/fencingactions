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

    /**
     * Get all records from memory DB
     * @return {Promise}
     */
    getUsers: () => User.findAll(),

    getUserById: (id) => User.findOne({ where: { id: id } })
};
