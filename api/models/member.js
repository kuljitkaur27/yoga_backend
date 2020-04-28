const mongoose = require('mongoose');

const { Schema } = mongoose;

const MemberSchema = new Schema({
  name: {
    type: String,
    required: 'Name is mandatory'
  },
  emailId: {
    type: String,
    required: 'Email Id is mandatory'
  },
  address: {
    type: String,
    required: 'Address is mandatory'
  },
  phone: String,
  startDate: {
    type: Date,
    required: 'Start Date is mandatory'
  },
  endDate: {
    type: Date,
    required: 'End Date is mandatory'
  },
  packageName: {
    type: String,
    required: 'Package Name is mandatory'
  },
  payment: Number,
  counter: Number,
  },
  { collection: 'member' });

module.exports = mongoose.model('Member', MemberSchema );
