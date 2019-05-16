import examplesRouter from './api/controllers/examples/router';
import authRouter from './api/controllers/auth/router';
const bodyParser = require("../node_modules/body-parser");
import userRouter from './api/controllers/user/router';
const morgan = require('../node_modules/morgan');
const jwt = require('../node_modules/jsonwebtoken');

export default function routes(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  app.use("/api/auth", authRouter);
  app.use(function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });

    }
  });

  app.use("/api/user", userRouter);
}
