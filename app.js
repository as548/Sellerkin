require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors")
const port = 4000;

const path =require("path")
if(process.env.NODE_ENV!=="PRODUCTION"){
   require("dotenv").config({./.env"});
}
// middle ware
app.use(express.json());
app.use(cors());
app.use(router)

app.use(express.static(path.join(__dirname,"./frotend/build")))

app.get("*",(req,res)=>{
   res.sendFile(path.resolve(__dirname,"./frotend/build/index.html"))
});    

app.listen(port,()=>{
    console.log(`server start at port no :${port}`)
})
