class OrderController {
  orderRepository;
  authRepository;

  constructor(
    _orderRepository,
    _authRepository,
  ) {
    this.orderRepository = _orderRepository;
    this.authRepository = _authRepository;
  }

  async getAllOrders() {
    return await this.orderRepository.getAllOrders();
  }

  async createNewOrder(body) {
    
    await this.orderRepository.createNewOrder(body);
  }
}

module.exports = OrderController;
