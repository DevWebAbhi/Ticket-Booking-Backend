const express=require("express");
const routerJourney=express.Router();
const {JourneyModel}=require("./bookingModel");


routerJourney.post("/post",async(req,res)=>{
    const {name,age,fr,to}=req.body;
    const {userID}=req;
        try {
            const model=await JourneyModel({
                name:name,age:age,fr:fr,to:to,userID:userID
            })

            model.save();
            console.log("Sucessfully Saved");
            res.send({msg:"Saved"});
        } catch (error) {
            res.send({msg:"error"});
            
        }
})

routerJourney.get("/get",async(req,res)=>{
    const {userID}=req;

    try {
        const bookings=await JourneyModel.find({_id:userID});
        res.send({bookings:bookings});
    } catch (error) {
        res.send({msg:"error"});
    }
})

module.exports={routerJourney};