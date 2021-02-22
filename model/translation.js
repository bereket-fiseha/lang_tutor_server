let mongoose=require('mongoose');
var option = { 
    server: { 
      socketOptions: { 
        keepAlive: 300000, connectTimeoutMS: 30000 
      } 
    }, 
    replset: { 
      socketOptions: { 
        keepAlive: 300000, 
        connectTimeoutMS : 30000 
      } 
    } 
  };
//var connect_url='mongodb+srv://translation_user:translation_user@123@cluster0.dhw0o.mongodb.net/TranslationDb?retryWrites=true&w=majority';
mongoose.connect(process.env.connect_url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>
console.log("connected")
)
.catch((err)=>{
console.log(err.message);

});

const transSchema=mongoose.Schema({
title:String,
category:Number,
esp_translate:String,
    sentence: String,
sen_translate:String,
audio:String,




})
const model=mongoose.model("translation_db",transSchema);

module.exports=model;
