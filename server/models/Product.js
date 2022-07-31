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
  cbd_thc: {
    type: String,
    required: true,
  },
  pricePerGram: {
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