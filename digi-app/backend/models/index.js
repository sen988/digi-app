const User = require('./user.js');
const DiaryEntry = require('./diaryEntry.js');

//associations
User.hasMany(DiaryEntry, { foreignKey: 'userId', onDelete: 'CASCADE' });
DiaryEntry.belongsTo(User, { foreignKey: 'userId' });

module.exports = { User, DiaryEntry };