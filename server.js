import express from 'express';
import routes from './api/routes';

const app = express();
const port = process.env.PORT || 3000;

routes(app);

app.listen(port);
