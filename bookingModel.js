const mongoose=require("mongoose");

const journeySchena=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    fr:{type:String,required:true},
    to:{type:String,required:true},
    userID:{type:String,required:true}
});

const JourneyModel=mongoose.model("Journey",journeySchena);

module.exports={
    JourneyModel
}