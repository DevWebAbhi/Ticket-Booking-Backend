const mongoose=require("mongoose");
require("dotenv").config();

const connect=mongoose.connect(`mongodb+srv://tiwariabhishek889912:${process.env.MONGO_PASSWORD}@cluster0.6gghzhk.mongodb.net/`);

module.exports={
    connect
}