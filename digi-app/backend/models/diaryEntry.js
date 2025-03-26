const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const User = require('./user.js');

const DiaryEntry = sequelize.define('DiaryEntry', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
});

DiaryEntry.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(DiaryEntry, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = DiaryEntry;