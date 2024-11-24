const express = require('express');
const sequelize = require('./config/db.js');
const itemRoutes = require('./routes/itemRoutes.js');

const app = express();

app.use(express.json());
app.use('/api', itemRoutes);

const PORT = process.env.PORT || 8000;

sequelize.sync()
    .then(() => {
        console.log('Database connected');
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch(err => console.error('Database connection failed:', err));
