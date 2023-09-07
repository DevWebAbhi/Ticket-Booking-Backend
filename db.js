const mongoose=require("mongoose");
require("dotenv").config();

const connect=mongoose.connect(`mongodb+srv://tiwariabhishek889912:mongodbatlas@cluster0.6gghzhk.mongodb.net/`);

module.exports={
    connect
}