const mongoose = require('mongoose');
const Timetable = mongoose.model('Timetable');

exports.index = (req, res) => {
  Timetable.find({}, (err, timetables) => {
    if (err) res.send(err);
    res.json(timetables);
  });
};

exports.create = (req, res) => {
  const newTimetable = new Timetable(req.body);
  newTimetable.save((err, timetable) => {
    if (err) res.send(err);
    res.json(timetable);
  });
};

exports.show = (req, res) => {
  Timetable.findById(req.params.classId, (err, timetable) => {
    if (err) res.send(err);
    res.json(timetable);
  })
};

exports.update = (req, res) => {
  Timetable.findOneAndUpdate(
    { _id: req.params.classId },
    req.body,
    { new: true },
    (err, timetable) => {
      if (err) res.send(err);
      res.json(timetable);
    }
  );
}

exports.destroy = (req, res) => {
  Timetable.deleteOne({ _id: req.params.classId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'Timetable successfully deleted',
      _id: req.params.classId
    });
  });
}
