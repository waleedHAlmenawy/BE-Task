class ProductController {
  productRepository;
  authRepository;

  constructor(_productRepository, _authRepository) {
    this.productRepository = _productRepository;
    this.authRepository = _authRepository;
  }

  async getAllProducts(restaurantId) {
    const products = await this.productRepository.getAllProducts(restaurantId);

    return products;
  }

  async createProduct(body) {
    const product = await this.productRepository.createProduct(body);

    return product;
  }
}

module.exports = ProductController;
