const express = require('express');
const schoolsRouter = require('./routes/schools');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/', schoolsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 