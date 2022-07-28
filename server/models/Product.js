const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  strain: {
    type: String,
    required: true,
  },
// possible add precentages of thc and cbd
  price: {
    type: Number,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;