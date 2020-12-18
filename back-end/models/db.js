const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CoffeeDb',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('Mongodb connection succed');
    }
    else{
        console.log('Error in DB connection :'+err);
    }
});
require('./employee.model')
require('./coffee.model')
require('./commande.model') 
require('./table.model')
require('./material.model')