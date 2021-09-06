var express = require("express");

var logger = require("morgan")

var cookieParser = require("cookie-parser")

var app = express();

app.use(logger("dev"))

app.use(cookieParser())


app.use("/about", (req, res, next)=>{
  res.cookie("username", "xyz");
  res.end("about page")

  next();
})

app.use((req , res, next)=>{
    console.log(req.cookies)

    next();
})

app.get('/', (req, res)=>{
    res.send("welcome")
})

app.listen(3000, ()=>{
    console.log("server is listening at 3k")
})