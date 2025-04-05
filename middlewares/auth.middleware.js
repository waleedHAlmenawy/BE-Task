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
}

module.exports = AuthMiddleware;
