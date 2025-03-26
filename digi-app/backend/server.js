const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database.js');

const { User, DiaryEntry } = require('./models/index.js');

const userRoutes = require('./routes/userRoutes.js');
const diaryEntryRoutes = require('./routes/diaryEntryRoutes.js');

const app = express();

app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json());

sequelize.sync()
    .then(() => console.log('Database synced!'))
    .catch(err => console.error('Error syncing the database:', err)
);

app.get('/', (req, res) => {
    res.send('digitalised! is up and running!.');
});

app.use('/api/users', userRoutes);
app.use('/api/diary-entries', diaryEntryRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));