const mongoose = require('mongoose');
const Cofee = mongoose.model('Coffee');
var CommandeSchema = new mongoose.Schema({
   numtable:Number,
        

    coffees: Array
        
});

mongoose.model('Commande',CommandeSchema);