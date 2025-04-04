const ProductModel = require("../models/product.model");

class ProductRepository {
  constructor() { }

  async getAllProducts() {
    return await ProductModel.find();
  }
  
  async createProduct(product) {
    return await ProductModel.create(product);
  }

  async getProductsById(productId) {
    return await ProductModel.findOne({
      _id: productId
    });
  }
}

module.exports = ProductRepository;
