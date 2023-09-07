const express=require("express");
const {UserModel}=require("./userModel");
const routerAccount=express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
require("dotenv").config();
const TOKENCODE=process.env.TOKENCODE;
routerAccount.post("/signup",async(req,res)=>{
               

                try {
                    const {name,email,password}=req.body;
                  await bcrypt.hash(password, 10,async function(err, hash) {
                       if(!err){
                        const user= await UserModel({
                            name:name,email:email,password:hash
                        })
                        await user.save();
                            res.send({msg:"Done"});
                       }else{
                        console.log("went wrong");
                        res.send({msg:"error"});
                       }
                    });
                } catch (error) {
                    res.send({msg:"error"});
                }

})


routerAccount.post("/login",async(req,res)=>{
   
    try {

            const {email,password}=req.body;

            const user=await UserModel.findOne({email:email});




       await bcrypt.compare(password, user.password,async function(err, re) {
            if(!err){
               try {
                var token =await jwt.sign({ userID:user._id },TOKENCODE );
                res.send({msg:"sucessfully login", token:token});
                console.log("Login");

               } catch (error) {
                res.send({msg:"error"});
               }
            }else{
                res.send({msg:"error"});
            }
        });



    } catch (error) {
        res.send({msg:"error"});
    }
})

module.exports={
    routerAccount
}