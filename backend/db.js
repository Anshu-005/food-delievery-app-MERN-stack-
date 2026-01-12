const mongoose = require("mongoose");
// require("dotenv").config();

const mongoURI =
  process.env.MONGO_URI;
const connectDB = async () => {
    try{
    await mongoose.connect(mongoURI);
    console.log("Connected successfully");
    // const collections = await mongoose.connection.db
    //   .listCollections()
    //   .toArray();
    // console.log(collections.map((c) => c.name));
    const fetched_data = mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    global.food_items = data;
    const foodCategory =  mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray()
    global.foodCategory = catData;
  } catch (err) {
    console.error("Error connecting to DB:", err);
  }
};

   


module.exports = connectDB;
