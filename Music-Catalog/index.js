const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/music', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.send('Music Catalog Service');
});

app.listen(port, () => {
    console.log(`Music Catalog Service running at http://localhost:${port}`);
});
