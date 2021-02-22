const express=require("express")
const translation_coll=require("../model/translation");
const route=express.Router();

//Get all translations
route.get('/translations',async (req,res)=>{
try{
const translations=await translation_coll.find();
return res.json(translations);
}
catch(ex){
 return  res.status(400).send(ex.message);
}

//return res.json({"message":"this is message"});
});

//Get  translation by id
route.get('/translation/:id',async (req,res)=>{
try{
if(req.params.id){
var translation =await translation_coll.findOne({_id:req.params.id})
return res.json(translation);

  }



}

catch(e){}


});
route.post('/translation',async (req,res)=>{
try {
  if(req.body==null){
    res.status(400).send("Bad Request,Body missing to the request!");
  }
  else{
      let translation = await new translation_coll(req.body);
      translation.save().then((doc) => {
          if (!doc || doc.length === 0) {
              res.status(500).setDefaultEncoding(doc)
          }
          else {

              res.status(201).json(doc)
          }


      }).catch((err) => res.send(err));

  }
} catch (e) {


} finally {

}


})

route.put('/translation/:_id',async (req,res)=>{

  
  try{
    if(!req.params._id){
     
      return res.send("parameter missing");
    }
    await translation_coll.findByIdAndUpdate(req.params._id,req.body,{new:true})
    .then((doc)=>{res.json(doc)})
    .catch(err=>{res.send(err)})
    //res.send("employees");
    } catch (e) {
  
  
  } finally {
  
  }

})

route.delete('/translation/:_id',async(req,res)=>{

  try {

  
        await translation_coll.findByIdAndRemove(req.params._id).then((doc) => {
            if (!doc || doc.length === 0) {
                res.status(500).setDefaultEncoding(doc)
            }
            else {
res.json({message:"Item deleted successfully"})
              }
  
  
        }).catch((err) => res.send(err));
  
    
  } catch (e) {
  
  
  } finally {
  
  }


})
module.exports = route;