var express = require('express');
var app = express();
var router = express.Router();
var morgan = require('morgan');
const mongoose = require('./database');
var bodyParser = require('body-parser');
var appRoutes = require('./Routes/Routes');
const cors = require('cors');


app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api',router);
appRoutes(router);



  app.use(cors());




app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) =>{
    res.send('Hello from home');
})

app.listen(app.get('port'), () =>{
    console.log('Example app listening on port', app.get('port'));
});

