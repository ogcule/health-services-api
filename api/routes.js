import {getAllServices} from './hsController';

const routes = (app) => {

app.get('/services', getAllServices);


}

export default routes;
