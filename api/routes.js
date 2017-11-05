
import {getAllServices, getSingleService, createService, updateService, removeService} from './hsControllers';
import {getAllFaq, getFaq, createFaq, updateFaq, removeFaq} from './faqControllers.js';
import { check, validationResult } from 'express-validator/check';
import { matchedData, sanitize } from 'express-validator/filter';

const routes = (app) => {
  app.get('/service', getAllServices);
  app.get('/service/:id', getSingleService);
  app.post('/service', createService);
  app.put('/service/:id', updateService);
  app.delete('/service/:name', removeService);

  app.get('/faq', getAllFaq);
  app.get('/faq/:id', getFaq);
  app.post('/faq',[
    check('question', 'Please enter a question').isLength({ min: 1 }),
    check('answer','Please enter an answer').isLength({ min: 1 })
  ],(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.mapped() });
  }
  next();
}, createFaq);
  app.put('/faq/:id', updateFaq);
  app.delete('/faq/:id', removeFaq);
}

export default routes;
