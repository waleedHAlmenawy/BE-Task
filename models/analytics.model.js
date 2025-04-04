const { mongoose } = require("mongoose");

const analyticsSchema = mongoose.Schema({
  totalRevenue: {
    type: Object,
    required: true
  },
  todayRevenue: {
    type: Object,
    required: true
  },
  soldItems: {
    type: Number,
    required: true,
  },
  activeUsers: {
    type: Number,
    required: true,
  },
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
});

const AnalyticsModel = mongoose.model("Analytics", analyticsSchema);
module.exports = AnalyticsModel;
