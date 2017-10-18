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

routes(app);


app.listen(port, () => {
  console.log('express server listening on port ' + port);
});
