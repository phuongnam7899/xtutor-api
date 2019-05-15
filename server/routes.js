import examplesRouter from './api/controllers/examples/router';
const body_parser = require("body-parser");

export default function routes(app) {
  app.use(body_parser);
  app.use('/api/examples', examplesRouter);
}
