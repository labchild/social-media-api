const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to db
mongoose.connect(process.env.MONGODB_URI || 'mongoose://localhost:27017/social-network-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// log mongoose queries
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on port ${PORT}`));