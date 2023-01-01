const express=require("express");
const app=express();

app.get("/",(req,resp)=>{
    resp.send("<h1>Welcome to Fabrikam</h1>");
})

// app.get("/home",(req,resp)=>{
//     resp.send("<h1>HALLA MADRID</h1>");
// })

const path=require("path");
const bodyparser=require("body-parser");

app.use(express.static(path.join(__dirname,"public")));

app.get("/login",(req,resp)=>{
    resp.sendFile(__dirname+"/public/index.html")
})

app.get("/login/account",(req,resp)=>{
    resp.sendFile(__dirname+"/public/account.html")
})

app.listen(8000,()=>{
    console.log("server running on port no 8000");
})