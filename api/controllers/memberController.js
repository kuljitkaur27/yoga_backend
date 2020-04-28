const mongoose = require('mongoose');
const Member = mongoose.model('Member');

exports.index = (req, res) => {
  Member.find({}, (err, members) => {
    if (err) res.send(err);
    res.json(members);
  });
};

exports.create = (req, res) => {
  const newMember = new Member(req.body);
  newMember.save((err, member) => {
    if (err) res.send(err);
    res.json(member);
  });
};

exports.show = (req, res) => {
  Member.findById(req.params.memberId, (err, member) => {
    if (err) res.send(err);
    res.json(member);
  })
};

exports.update = (req, res) => {
  Member.findOneAndUpdate(
    { _id: req.params.memberId },
    req.body,
    { new: true },
    (err, member) => {
      if (err) res.send(err);
      res.json(member);
    }
  );
}

exports.destroy = (req, res) => {
  Member.deleteOne({ _id: req.params.memberId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'Member successfully deleted',
      _id: req.params.memberId
    });
  });
}
