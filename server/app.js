const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
const dotenv = require('dotenv').config();
const { MongoClient } = require('mongodb');

// CONNECTED TO DB
const dbCon = require("./db/mongodb-connect");
dbCon.dbConnect(process.env.DB_CONNECTION);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import Router
const mainRouter = require('./routes/index');
app.use("/user", mainRouter);

// CONNECTED TO SERVER      
app.listen(port, () => {
    console.log(`Server Connected listen ${port}`);
})
