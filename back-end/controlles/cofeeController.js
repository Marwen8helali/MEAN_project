const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Cofee = mongoose.model('Coffee');

router.get('/',(req,res)=>{
    res.json("hello");
    }
);


router.post('/',(req,res)=>{
    insertRecord(req, res);
});

function insertRecord(req, res) {
    var cofee = new Cofee();
    cofee.price = req.body.price;
    cofee.desc=   req.body.desc;
    cofee.designation=req.body.designation;
    cofee.qte= req.body.qte;
    cofee.category= req.body.category;
    cofee.save((err, doc) => {
        if (!err)
            res.json("ok")
        else {
            console.log('Error during record insertion : ' + err);
        }    });
}

async function getAll(req, res){
    try{
        const find = await Cofee.find();
        res.json(find);
      }catch(err){
          res.json({message : err});
     }
  }
  
  router.get('/list', async (req, res)=>{
      getAll(req, res);
  });

  router.get('/category/:category', async (req, res)=>{
    getCoffeeByCategory(req, res);
});

  async function getCoffeeByCategory(req, res){
    try{
        
        const findByCategory = await Cofee.find().
        where('category').equals(req.params.category).exec();
        res.json(findByCategory);
      }catch(err){
          res.json({message : err});
     }
  }
 




module.exports=router;