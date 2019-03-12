const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const route = require('./routes/route');
const app = express();
const port = 3000;

//Set up default mongoose connection
const dbURL = 'mongodb://localhost:27017/contact_manager';
mongoose.connect(dbURL);
const db = mongoose.connection;
db.on('connected', () => console.log('Mongoose default connection is open to ', dbURL));
db.on('disconnected', () => console.log('Mongoose default connection is disconnected'));
db.on('error', (err) => console.log('Mongoose default connection has occured ' + err + ' error'));
//middileware
app.use(cors());
//body parser
app.use(bodyparser.json());
//static files
app.use(express.static(path.join(__dirname, 'public')));
//routes
app.use('/api', route);
app.listen(port, () => console.log('Server started at port: ' + port));