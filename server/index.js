import './common/env';
import Server from './common/server';
import routes from './routes';

export default new Server()
  .router(routes)
  .listen(process.env.PORT)
  // .connect('mongodb+srv://phuongnam7899:phuongnam7899@xtutor-tdorw.mongodb.net/test?retryWrites=true', {
  //     useNewUrlParser: true
  //   },
  //     (err) => {
  //       if (err) console.log(err);
  //       else {
  //         console.log("connected");
  //       };
  //     });
