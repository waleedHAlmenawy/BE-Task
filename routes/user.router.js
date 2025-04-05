const express = require("express");
const router = express.Router();

const userRouter = (userController, authMiddleware) => {
    router.get(
        "/",
        authMiddleware.anyUser(userController.authRepository),
        async (req, res, next) => {
            try {
                const user = await userController.getUser(req.auth._id);

                res.status(200).send(user);
            } catch (error) {
                next(error);
            }
        }
    );

    router.patch(
        "/",
        authMiddleware.anyUser(userController.authRepository),
        async (req, res, next) => {
            try {
                const user = await userController.updateUser(req.auth._id, req.body);

                res.status(200).send(user);
            } catch (error) {
                next(error);
            }
        }
    );

    return router;
};

module.exports = userRouter;
