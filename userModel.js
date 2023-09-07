const mongoose=require("mongoose");

const userSchena=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String ,enum: ['user', 'admin'],default:"user"}
});

const UserModel=mongoose.model("Users",userSchena);

module.exports={
    UserModel
}