class OrderStatusController {
    orderStatusRepository;

    constructor(_orderStatusRepository) {
        this.orderStatusRepository = _orderStatusRepository;
    }

    async getAllOrderStatuses() {
        return await this.orderStatusRepository.getAllOrderStatuses();
    }

    async getOrderStatusById(statusId) {
        return await this.orderStatusRepository.getOrderStatusById(statusId);
    }

    async createNewOrderStatus(orderStatusInfo) {
        return await this.orderStatusRepository.createNewOrderStatus(orderStatusInfo);
    }
}

module.exports = OrderStatusController;
