const userBuilder = require('../controllers/userController');
const memberBuilder = require('../controllers/memberController');
const packageBuilder = require('../controllers/packageController');
const timetableBuilder = require('../controllers/timetableController');
const yogaBuilder = require('../controllers/yogaController');

// Users
module.exports = (app) => {
  app.route('/instructors')
     .get(userBuilder.index)
     .post(userBuilder.create);

  app.route('/instructors/:instructorId')
    .get(userBuilder.show)
    .put(userBuilder.update)
    .delete(userBuilder.destroy);


// Timetable

  app.route('/classes')
     .get(timetableBuilder.index)
     .post(timetableBuilder.create);

  app.route('/classes/:classId')
    .get(timetableBuilder.show)
    .put(timetableBuilder.update)
    .delete(timetableBuilder.destroy);


//Packages

  app.route('/packages')
     .get(packageBuilder.index)
     .post(packageBuilder.create);

  app.route('/packages/:packageId')
    .get(packageBuilder.show)
    .put(packageBuilder.update)
    .delete(packageBuilder.destroy);


//Members

  app.route('/members')
     .get(memberBuilder.index)
     .post(memberBuilder.create);

  app.route('/members/:memberId')
    .get(memberBuilder.show)
    .put(memberBuilder.update)
    .delete(memberBuilder.destroy);


//Yogas

  app.route('/yogas')
     .get(yogaBuilder.index)
     .post(yogaBuilder.create);

  app.route('/yogas/:yogaId')
    .get(yogaBuilder.show)
    .put(yogaBuilder.update)
    .delete(yogaBuilder.destroy);
};
