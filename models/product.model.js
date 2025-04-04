const { mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  icon: {
    type: String,
    maxLength: 255,
    required: true
  }
});

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
