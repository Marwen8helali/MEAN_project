const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const material = mongoose.model('Material');



router.post('/',(req,res)=>{
    insertRecord(req, res);
});

function insertRecord(req, res) {
    var material = new material();
  
    
    material.designation=req.body.designation;
    material.etat=req.body.etat;
    material.quntity=req.body.quntity;

    material.save((err, doc) => {
        if (!err)
        res.json(material);
        else {
            console.log('Error during record insertion : ' + err);
        }
    });
}

async function getAll(req, res){
    try{
        const find = await material.find();
        res.json(find);
      }catch(err){
          res.json({message : err});
     }
  }
  
  router.get('/list', async (req, res)=>{
      getAll(req, res);
  });


module.exports=router;