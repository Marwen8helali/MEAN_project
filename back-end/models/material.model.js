const mongoose = require('mongoose');

var materialSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: 'This field is required.'
    },
    designation :String,
    etat: String,
    quntity:Number,
    
});

mongoose.model('Material',materialSchema);