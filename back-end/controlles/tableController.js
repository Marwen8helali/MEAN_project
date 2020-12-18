const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Table = mongoose.model('Table');

router.get('/',(req,res)=>{
    res.json("hello");
    }
);


router.post('/',(req,res)=>{
    insertRecord(req, res);
});

function insertRecord(req, res) {
    var table = new Table();
    table.numero = req.body.numero;
    table.etat=   req.body.etat;
    table.dateReservation=req.body.dateReservation;
   
    table.save((err, doc) => {
        if (!err)
            res.json("ok")
        else {
            console.log('Error during record insertion : ' + err);
        }    });
}

async function getAll(req, res){
    try{
        const find = await Table.find();
        res.json(find);
      }catch(err){
          res.json({message : err});
     }
  }
  
  router.get('/list', async (req, res)=>{
      getAll(req, res);
  });

  router.get('/etat/:etat', async (req, res)=>{
    getCoffeeByCategory(req, res);
});

  async function getCoffeeByCategory(req, res){
    try{
        
        const findByEtat = await Table.find().
        where('etat').equals(req.params.etat).exec();
        res.json(findByEtat);
      }catch(err){
          res.json({message : err});
     }
  }
  
  async function updateE(req, res, id){
    try{
     const update = await Table.updateOne(
      {_id:id},
       {$set:{numero:req.body.numero,etat:req.body.etat}}
       );
     res.json(update);
   }catch(err){
        res.json({message : err});
   }
}
router.patch('/update/:postid',async(req,res)=>{
    updateE(req, res,req.params.postid)
 });

module.exports=router;