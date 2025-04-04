const express = require("express");
const router = express.Router();

const orderStatusRouter = (orderStatusController) => {
    router.get(
        "/",
        async (req, res, next) => {
            try {
                const ordersStatuses = await orderStatusController.getAllOrderStatuses();

                res.status(200).send(ordersStatuses);
            } catch (error) {
                next(error);
            }
        }
    );
    router.get(
        "/:statusId",
        async (req, res, next) => {
            const { statusId } = req.params;

            try {
                const ordersStatuses = await orderStatusController.getOrderStatusById(statusId);

                res.status(200).send(ordersStatuses);
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
            const newOrderStatus = await orderStatusController.createNewOrderStatus(
              req.body
            );
    
            res.status(201).send(newOrderStatus);
          } catch (error) {
            next(error);
          }
        }
      );
    return router;
};

module.exports = orderStatusRouter;
