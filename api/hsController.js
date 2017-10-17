import promise from 'bluebird';

//pg-promises connection
const initOptions = {
  // Initialization Options
  promiseLib: promise
};
const pgp = require('pg-promise')(initOptions);
const connectionString = 'postgres://localhost:5432/services';
// create database object
const db = pgp(connectionString);

function getAllServices(req, res, next) {
  db.any('select * from service')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL services'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
export {getAllServices}
