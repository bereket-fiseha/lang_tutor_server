

const express = require('express')
const dotenv=require('dotenv')



const app = express();
dotenv.config();
let bodyParser=require("body-parser");
let cors=require("cors");

const translate_route=require('./route/translation_routes')
app.use(bodyParser.json())
app.use(cors());
app.use(translate_route);
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.static('public'));

app.use((req,res)=>{
res.status(400).send("Not Found");


});
const port=process.env.PORT||4000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

