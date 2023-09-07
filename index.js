const {connect}=require("./db");
const express=require("express");
require("dotenv").config();
const app=express();
const PORT=process.env.PORT;
const TOKENCODE=process.env.TOKENCODE;
const {routerAccount} = require("./accounts");
const {UserModel}=require("./userModel");
const {routerJourney}=require("./journey");
var jwt = require('jsonwebtoken');


app.use(express.json());
app.get("/",(req,res)=>{
    res.send({msg:"Welcome to Backend"});
})

app.use("/account",routerAccount);

async function auth(req,res,next){
    const token=req.headers.authorization.split(" ")[1];
    console.log(token)
try {
    
   await jwt.verify(token, TOKENCODE, async function(err, decoded) {
    
       if(!err){
        try {
            const user = await UserModel.findOne({_id:decoded.userID})
            req.userID=user._id;
            next();
        } catch (error) {
            res.send({msg:"error1"});
        }
       }else{
        res.send({msg:"error2"});
       }
      });
} catch (error) {
    res.send({msg:"error3"});
}
}

app.use("/journey",auth,routerJourney);





app.listen(PORT,async()=>{
    try {
        await connect;
        console.log("Connection sucessfull");
    } catch (error) {
        console.log(error);
    }
})