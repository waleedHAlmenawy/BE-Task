const jwt = require("jsonwebtoken");

class AuthMiddleware {
  constructor() { }

  anyUser(authRepository) {
    return async (req, res, next) => {
      try {
        const token = req.headers["jwt"];

        if (!token) return res.status(401).send({ message: "unauthorized user" });

        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const { _id } = payload;
        const user = await authRepository.getUser({ _id });

        if (!user) return res.status(401).send({ message: "unauthorized user" });

        req.auth = user;

        next();
      } catch (error) {
        return res.status(403).send({ message: error.message });
      }
    };
  }

  user(authRepository) {
    return async (req, res, next) => {
      try {
        const token = req.headers["jwt"];

        if (!token) return res.status(401).send({ message: "unauthorized user" });

        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const { _id } = payload;

        const user = await authRepository.getUser({ _id });


        if (!user) return res.status(401).send({ message: "unauthorized user" });

        if (!user.typeId._id.equals("663dfebba2ede177e6885e42"))
          return res.status(401).send({ message: "unauthorized user" });

        req.auth = user;

        next();
      } catch (error) {
        return res.status(403).send({ message: error.message });
      }
    };
  }

  admin(authRepository) {
    return async (req, res, next) => {
      try {
        const token = req.headers["jwt"];

        if (!token) return res.status(401).send({ message: "unauthorized user" });

        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const { _id } = payload;
        const user = await authRepository.getUser({ _id });

        if (!user) return res.status(401).send({ message: "unauthorized user" });

        if (!user.typeId._id.equals("663dfe9ba2ede177e6885e41"))
          return res.status(401).send({ message: "unauthorized user" });

        req.auth = user;

        next();
      } catch (error) {
        return res.status(403).send({ message: error.message });
      }
    };
  }

  restaurantAdmin(authRepository) {
    return async (req, res, next) => {
      try {

        const token = req.headers["jwt"];

        if (!token) return res.status(401).send({ message: "unauthorized user" });

        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const { _id } = payload;
        const user = await authRepository.getUser({ _id });

        if (!user) return res.status(401).send({ message: "unauthorized user" });

        if (!user.typeId._id.equals("663e9b24a2ede177e6885e45"))
          return res.status(401).send({ message: "unauthorized user" });

        req.auth = user;

        next();
      } catch (error) {
        return res.status(403).send({ message: error.message });
      }
    };
  }

  restaurantCashier(authRepository) {
    return async (req, res, next) => {
      try {
        const token = req.headers["jwt"];

        if (!token) return res.status(401).send({ message: "unauthorized user" });


        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const { _id } = payload;
        const user = await authRepository.getUser({ _id });

        if (!user) return res.status(401).send({ message: "unauthorized user" });

        if (!user.typeId._id.equals("664fc05da9a0560d2742da1b"))
          return res.status(401).send({ message: "unauthorized user" });

        req.auth = user;

        next();
      } catch (error) {
        return res.status(403).send({ message: error.message });
      }
    };
  }

  deliveryMan(authRepository,deliveryManRepository) {
    return async (req, res, next) => {
      try {
        const token = req.headers["jwt"];

        if (!token) return res.status(401).send({ message: "unauthorized user" });

        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const { _id } = payload;

        const user = await authRepository.getUser({ _id });

        if (!user) return res.status(401).send({ message: "unauthorized user" });

        if (!user.typeId._id.equals("66771774961cf332096ffcb9"))
          return res.status(401).send({ message: "unauthorized user" });

        req.auth = user;

        const deliveryMan = await deliveryManRepository.getDeliveryMan({userId:_id});

        if (!deliveryMan) return res.status(401).send({ message: "unauthorized user" });

        req.deliveryMan = deliveryMan;


        next();
      } catch (error) {
        return res.status(403).send({ message: error.message });
      }
    };
  }
}

module.exports = AuthMiddleware;
