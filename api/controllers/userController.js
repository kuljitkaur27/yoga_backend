const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.index = (req, res) => {
  User.find({}, (err, users) => {
    if (err) res.send(err);
    res.json(users);
  });
};

exports.create = (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.show = (req, res) => {
  User.findById(req.params.instructorId, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  })
};

exports.update = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.instructorId },
    req.body,
    { new: true },
    (err, user) => {
      if (err) res.send(err);
      res.json(user);
    }
  );
}

exports.destroy = (req, res) => {
  User.deleteOne({ _id: req.params.instructorId}, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'User successfully deleted',
      _id: req.params.instructorId
    });
  });
}
