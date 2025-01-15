const express = require("express");
let app = express();


app.get("/",(req,res)=>{
  res.send("<h1>ashafak </h1>")
})

app.get("/about",(req,res)=>{
  res.send("<h1>this is about page </h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>this is contact page </h1>")
  }
)

app.get("/service",(req,res)=>{
  res.send("<h1>this is service page </h1>")
})


app.get("/offers",(req,res)=>{
  res.send("<h1>this is offers page </h1>")
})
let port = 9000
app.listen(port,()=>{
  console.log(`server run on ${port}`);
  
})