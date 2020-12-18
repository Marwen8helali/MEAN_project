const mongoose = require('mongoose');

var tableSchema = new mongoose.Schema({
    numero: {
        type: String,
        required: 'This field is required.'
     },
    etat: String,
      
     
     dateReservation:Date,
         
     
     
    
});

mongoose.model('Table',tableSchema);