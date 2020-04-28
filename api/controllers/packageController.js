const mongoose = require('mongoose');
const Package = mongoose.model('Package');

exports.index = (req, res) => {
  Package.find({}, (err, packages) => {
    if (err) res.send(err);
    res.json(packages);
  });
};

exports.create = (req, res) => {
  const newPackage = new Package(req.body);
  newPackage.save((err, package) => {
    if (err) res.send(err);
    res.json(package);
  });
};

exports.show = (req, res) => {
  Package.findById(req.params.packageId, (err, package) => {
    if (err) res.send(err);
    res.json(package);
  })
};

exports.update = (req, res) => {
  Package.findOneAndUpdate(
    { _id: req.params.packageId },
    req.body,
    { new: true },
    (err, package) => {
      if (err) res.send(err);
      res.json(package);
    }
  );
}

exports.destroy = (req, res) => {
  Package.deleteOne({ _id: req.params.packageId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'User successfully deleted',
      _id: req.params.packageId
    });
  });
}
