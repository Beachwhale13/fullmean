let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

app.use(bodyParser.json({ extendded: true }));
app.use(express.static(path.join(__dirname, 'public','dist')))

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, ()=>{
  console.log("you rang? on port 8000")
})
