const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const productRouter = (
  productController,
  authMiddleware,
  multerMiddleware,
  paginationMiddleware
) => {
  router.get("/", async (req, res, next) => {
    try {
      const products = await productController.getAllProducts();

      res.status(200).send(products);
    } catch (error) {
      next(error);
    }
  });

  router.post(
    "/",
    // multerMiddleware.uploadSingleImage("icon"),
    async (req, res, next) => {
      try {
        const newProduct = await productController.createProduct(req.body);

        res.status(201).send(newProduct);
      } catch (error) {
        next(error);
      }
    });

  return router;
};

module.exports = productRouter;
