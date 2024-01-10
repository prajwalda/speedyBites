const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://GoFood:Hello123@cluster0.kpnqw.mongodb.net/GoFoodMern?retryWrites=true&w=majority";

const fetchDataFromMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    const collection = mongoose.connection.db.collection("food_items");
    const data = await collection.find({}).toArray();

    const foodCategory = mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;

    return { food_items: data, foodCategory: catData };
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    throw err;
  }
};

module.exports = fetchDataFromMongoDB;
