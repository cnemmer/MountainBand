var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  desc: String
});
mongoose.model("Products", ProductSchema); 
