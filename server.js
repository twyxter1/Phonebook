const express = require('express');
const ejs = require('ejs');
const mainPage = require('./routes/mainRoute');
const app = express();


app.set('view engine', ejs);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


app.use(mainPage);



app.listen(3000, () => {

    console.log('Server is running on Port 3000');
    
});
