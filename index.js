const express=require("express");
const app=express();
var cors = require('cors');
app.use(cors());
const body_parse=require("body-parser");
app.use(body_parse.json()); 
app.use(body_parse.urlencoded({ extended: true })); // support encoded bodies
// const body_parse=require("body-parser");
// app.use(body_parse.urlencoded({extended: true}));
app.listen(9000);
app.get("/",(req,resp)=>{
    resp.json({msg:"Hello From Server"});
})
app.post("/",(req,resp)=>{
    console.log(req.body);
    // let name=req.body.nam;
    // let title=req.body.JOB;
    // console.log(name);
    // console.log(title);
    resp.json({msg:"got it"});
});