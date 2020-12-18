require('./models/db');

const express = require('express');
const employeeController = require('./controlles/employeeController');
const cofeeController = require('./controlles/cofeeController');
const commandeController = require('./controlles/commandeController');
const materialController = require('./controlles/materialController');
const tableController = require('./controlles/tableController');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
let cors = require('cors');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});
app.use(cors());
app.use('/employee',employeeController);
app.use('/material',employeeController);
app.use('/cofee',cofeeController)
app.use('/commande',commandeController)
app.use('/table',tableController)