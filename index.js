const express =require("express")
const app=express();
const importData = require("./data.json");
// const importData = require("./data.json");
let port = process.env.port || 4000;
const apple="fruit";
app.post("/pos",function requestHandler(req, res){
    res.end("Done")
});
app.get("/seed",(req,res)=>{
    return res.json({Bestfruit:"apple"})
})
app.get("/",(req,res)=>{
    res.send("Hel World")
});

app.get("/players",(req,res)=>{
    res.send(importData)
});
app.all("/secret",(req,res,next)=>{
    console.log("Accessing the secret information");
    console.log(importData)
    next();
});
 app.listen(port,()=>{
     console.log(`Example app is Listening on the port http://localhost:${port}`
     );
 });
 //const server = await app.listen(3000);