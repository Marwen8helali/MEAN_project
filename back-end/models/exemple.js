const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

async function getAll(req, res){
  try{
      //const find = await Employee.find();
      const findByCategory = await Employee.find().
      where('category').equals(res,req.params.category);
      res.json(findByCategory);
    }catch(err){
        res.json({message : err});
   }
}

router.get('/all', async (req, res)=>{
    getAll(req, res);
});

async function insertRecord(req, res) {
  var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
   try{
     const saveEmplo = await employee.save();
     res.json(saveEmplo);
   }catch(err){
        res.json({message : err});

   }
}
router.post('/new', async(req, res)=> {
  insertRecord(req, res);
});

async function getId(req, res, id){
  try{
     const findId = await Employee.findById(id);
     res.json(findId);
   }catch(err){
        res.json({message : err});
   }
}
router.get('/show/:postid',async(req,res)=>{
  getId(req, res,req.params.postid)
});

async function deleteE(req,res, id){
   try{
     const removeP = await Employee.remove({_id:id});
     res.json(removeP);
   }catch(err){
        res.json({message : err});
   } 
}
router.delete('/del/:postid',async(req,res)=>{
   deleteE(req, res,req.params.postid)
});

async function updateE(req, res, id){
    try{
     const update = await Employee.updateOne(
      {_id:id},
       {$set:{fullName:req.body.fullName,email:req.body.email, mobile:req.body.mobile,city:req.body.city}}
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