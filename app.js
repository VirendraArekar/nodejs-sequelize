const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sync Sequelize models with the database
sequelize.sync({ alter: true })
  .then(() => console.log('Database synchronized'))
  .catch((err) => console.log(err));

// Routes
app.use('/api/users', userRoutes);
app.use('/auth', authRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
