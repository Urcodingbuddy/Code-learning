const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const adminRouter =  require('./routes/admin');
const userRouter = require('./routes/user');
app.use('/admin', adminRouter)
app.use('/user', userRouter)
const Port = 3000;
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://anshpethe110:%40mangoanshpethe159@cluster0.702twr0.mongodb.net/100xdevs-Practice?retryWrites=true&w=majority")








app.listen(Port, () => console.log(`Server running on port ${Port}`));