const AnalyticsModel = require("../models/analytics.model");

class OrderRepository {
  constructor() { }

  async getAnalytics() {
    return await AnalyticsModel.find();
  }
}

module.exports = OrderRepository;
