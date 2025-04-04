const express = require("express");
const router = express.Router();

const analyticsRouter = (analyticsController) => {
    router.get(
        "/",
        async (req, res, next) => {
            try {
                const analytics = await analyticsController.getAnalytics();

                res.status(200).send(analytics);
            } catch (error) {
                next(error);
            }
        }
    );
    return router;
};

module.exports = analyticsRouter;
