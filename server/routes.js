import examplesRouter from './api/controllers/examples/router';
import authRouter from './api/controllers/auth/router';
const bodyParser = require("../node_modules/body-parser");
import userRouter from './api/controllers/user/router';

export default function routes(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/examples', examplesRouter);
  app.use("/api/auth",authRouter);
  app.use("/api/user", userRouter);
}
