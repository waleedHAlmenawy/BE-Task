const OrderStatusModel = require("../models/orderStatus.model");

class OrderStatusRepository {
    constructor() { }
    
    async getAllOrderStatuses() {
        return await OrderStatusModel.find();
    }

    async getOrderStatusById(statusId) {
        return await OrderStatusModel.findOne({ code: statusId });
    }

    async createNewOrderStatus(orderStatusInfo) {
        return await OrderStatusModel.create(orderStatusInfo);
    }
}

module.exports = OrderStatusRepository;