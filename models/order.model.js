const { mongoose } = require("mongoose");

const orderSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  statusId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OrderStatus",
    default: "67eef45db3ff2d9841e2926c",
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
});

const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;
