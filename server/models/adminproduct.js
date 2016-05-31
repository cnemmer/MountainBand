var mongoose = require("mongoose");

var AdminProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  img1: String,
  img2: String,
  img3: String,
  description: String,
  metal: String,
  moment: String
});

mongoose.model("AdminProduct", AdminProductSchema);
