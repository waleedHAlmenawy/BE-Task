const OrderModel = require("../models/order.model");

class OrderRepository {
  constructor() { }

  async getAllOrders() {
    return await OrderModel.find()
      .populate("statusId")
      .populate("productId")
      .sort({ createdAt: -1 });
  }

  async createNewOrder(orderInfo) {
    return await OrderModel.create(orderInfo);
  }
}

module.exports = OrderRepository;
