const express = require("express");
require("dotenv").config();

const cors = require("cors");
const app = express();

const http = require("http");
const server = http.createServer(app);

const mainRouter = express.Router();
const port = process.env.PORT;


/* Connect To Database */

const database = require("./database/database");

database();
app.use(express.json());
app.use(cors());

/* Routers */

const authRouter = require("./routes/auth.router");
const userRouter = require("./routes/user.router");
const orderRouter = require("./routes/orders.router.js");
const orderStatusRouter = require("./routes/orderStatus.router.js");
const productRouter = require("./routes/product.router.js");
const analyticsRouter = require("./routes/analytics.router.js");

/* Repositories */

const AuthRepository = require("./repositories/auth.repository.js");
const UserRepository = require("./repositories/user.repository.js");
const OrderRepository = require("./repositories/orders.repository.js");
const OrderStatusRepository = require("./repositories/orderStatus.repository.js");
const ProductRepository = require("./repositories/product.repository.js");
const AnalyticsRepository = require("./repositories/analytics.repository.js");

/* Controllers */

const AuthController = require("./controllers/auth.controller.js");
const UserController = require("./controllers/user.controller.js");
const OrderController = require("./controllers/orders.controller");
const OrderStatusController = require("./controllers/orderStatus.controller");
const ProductController = require("./controllers/product.controller");
const AnalyticsController = require("./controllers/analytics.controller");

/* Middlewares */

const AuthMiddleware = require("./middlewares/auth.middleware");
const PaginationMiddleware = require("./middlewares/pagination.middleware");
const MulterMiddleware = require("./middlewares/multer.middleware");
const errorMiddleware = require("./middlewares/error.middleware.js");

/* Repositories Instances */

const authRepository = new AuthRepository();
const userRepository = new UserRepository();
const orderRepository = new OrderRepository();
const orderStatusRepository = new OrderStatusRepository();
const productRepository = new ProductRepository();
const analyticsRepository = new AnalyticsRepository();

/* Controllers Instances */

const authController = new AuthController(authRepository);
const userController = new UserController(userRepository, authRepository);
const orderController = new OrderController(orderRepository, authRepository);
const orderStatusController = new OrderStatusController(orderStatusRepository);
const productController = new ProductController(productRepository, authRepository);
const analyticsController = new AnalyticsController(analyticsRepository);

/* Middlewares Instances */

const authMiddleware = new AuthMiddleware(authRepository);
const paginationMiddleware = new PaginationMiddleware();
const multerMiddleware = new MulterMiddleware();

/* --------------------- */

mainRouter.use(
  "/user",
  userRouter(userController, authMiddleware, paginationMiddleware)
);
mainRouter.use("/authentication", authRouter(authController, authMiddleware));
mainRouter.use("/orders", orderRouter(orderController, authMiddleware));
mainRouter.use("/orderStatuses", orderStatusRouter(orderStatusController));
mainRouter.use(
  "/products",
  productRouter(
    productController,
    authMiddleware,
    multerMiddleware,
    paginationMiddleware
  )
);
mainRouter.use('/analytics', analyticsRouter(analyticsController));

/* --------------------- */

app.use("/api/v1", mainRouter);

app.use(errorMiddleware);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
