const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const orderRouter = (orderControllers, authMiddleware) => {
  router.get(
    "/",
    // authMiddleware.admin(orderControllers.authRepository),
    async (req, res, next) => {
      try {
        const orders = await orderControllers.getAllOrders();

        res.status(200).send(orders);
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    "/",
    // authMiddleware.user(orderControllers.authRepository),
    async (req, res, next) => {
      try {
        const newOrder = await orderControllers.createNewOrder(
          req.body
        );

        res.status(201).send(newOrder);
      } catch (error) {
        next(error);
      }
    }
  );

  return router;
};

module.exports = orderRouter;
