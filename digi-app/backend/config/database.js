const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('digi-db', 'postgres', 'digiapp', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: false,
    },
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Error connecting to the database:', err));

module.exports = sequelize;