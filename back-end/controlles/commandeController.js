const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Commande = mongoose.model('Commande');

router.get('/',(req,res)=>{
    res.json("hello");
    }
);


router.post('/',(req,res)=>{
    insertRecord(req, res);
});

function insertRecord(req, res) {
    var commande = new Commande();
  
    commande.coffees=req.body.coffees;
    commande.numtable=req.body.numtable;
    commande.save((err, doc) => {
        if (!err)
        res.json(commande);
        else {
            console.log('Error during record insertion : ' + err);
        }
    });
}

async function getAll(req, res){
    try{
        const find = await Commande.find();
        res.json(find);
      }catch(err){
          res.json({message : err});
     }
  }
  
  router.get('/list', async (req, res)=>{
      getAll(req, res);
  });


module.exports=router;