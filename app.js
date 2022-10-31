const express = require ("express");
const app = express();
app.use(express.static('public'));

// creating Middlewares
const homeroute = require("./routes/home");
const singuproute = require("./routes/signUp");


// configure of middlewares
app.use("/Home",homeroute)
app.use("/signup",singuproute)


app.listen(8000,(req,res)=>{
    console.log("server Started On Port 8000");
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/htmls/home.html")
})
app.get("/SignUp",(req,res)=>{
    res.sendFile(__dirname + "/public/htmls/custSignUp.html")
})