const mongoose = require('mongoose');
const Yoga = mongoose.model('Yoga');

exports.index = (req, res) => {
  Yoga.find({}, (err, yogas) => {
    if (err) res.send(err);
    res.json(yogas);
  });
};

exports.create = (req, res) => {
  const newYoga = new Yoga(req.body);
  newYoga.save((err, yoga) => {
    if (err) res.send(err);
    res.json(yoga);
  });
};

exports.show = (req, res) => {
  Yoga.findById(req.params.yogaId, (err, yoga) => {
    if (err) res.send(err);
    res.json(yoga);
  })
};

exports.update = (req, res) => {
  Yoga.findOneAndUpdate(
    { _id: req.params.yogaId },
    req.body,
    { new: true },
    (err, yoga) => {
      if (err) res.send(err);
      res.json(yoga);
    }
  );
}

exports.destroy = (req, res) => {
  Yoga.deleteOne({ _id: req.params.yogaId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'User successfully deleted',
      _id: req.params.yogaId
    });
  });
}
