import express from 'express';
import routes from './api/routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .json({
    status: 'error',
    message: err.message
  });
});

/* enable CORS on ExpressJS to solve error
- No 'Access-Control-Allow-Origin' header is present on the requested resource.*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);


app.listen(port, () => {
  console.log('express server listening on port ' + port);
});
