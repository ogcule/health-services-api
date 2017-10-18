import bodyParser from 'body-parser';
import {getAllServices, getSingleService, createService, updateService, removeService} from './hsControllers';
import {getAllFaq, getFaq, createFaq, updateFaq, removeFaq} from './faqControllers.js';
// Parse body of incoming request with body-parser
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const routes = (app) => {
  app.get('/service', getAllServices);
  app.get('/service/:id', getSingleService);
  app.post('/service', urlencodedParser, createService);
  app.put('/service/:id',urlencodedParser, updateService);
  app.delete('/service/:name', removeService);

  app.get('/faq', getAllFaq);
  app.get('/faq/:id', getFaq);
  app.post('/faq', urlencodedParser, createFaq);
  app.put('/faq/:id',urlencodedParser, updateFaq);
  app.delete('/faq/:question', removeFaq);


}

export default routes;
