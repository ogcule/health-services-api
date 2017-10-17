import {getAllPuppies, getSinglePuppy, createPuppy, updatePuppy, removePuppy} from './hsController';

const routes = (app) => {

app.get('/api/puppies', getAllPuppies);
app.get('/api/puppies/:id', getSinglePuppy);
app.post('/api/puppies', createPuppy);
app.put('/api/puppies/:id', updatePuppy);
app.delete('/api/puppies/:id', removePuppy);

}

export default routes;
