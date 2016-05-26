var mongoose = require("mongoose");
var Products = mongoose.model("Products");

module.exports = {

  index: function(req, res){
    Products.find({}, function(err, allProds){
      if(err){
        console.log(err);
      }else{
        res.json(allProds);
      }
    })
  },
  create: function(req, res){
    var new_product = new Products(req.body);

    new_product.save(function(err, savedProd){
      if(err){
        console.log(err);
      }else{
        res.json(savedProd);
      }
    })
  }


}
