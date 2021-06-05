// getting-started.js
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const DB_UR = 'mongodb://localhost/test'

try {
    mongoose.connect(DB_UR, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
} catch (err) {
    console.log(err.message);
    process.exit(1);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));