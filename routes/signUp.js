const express = require("express");
const app = express();
const route = express.Router();
app.use(express.urlencoded({extended:true}));


route.post("/",(req,res)=>{
    var uName = req.body.Uname;
    var uNumber = req.body.num;
    var email = req.body.email;
    var pass = req.body.pass;
    res.send("sign UP complete");
console.log(uName);
})
module.exports = route;