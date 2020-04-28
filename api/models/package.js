const mongoose = require('mongoose');

const { Schema } = mongoose;

const PackageSchema = new Schema({
  packageName: {
    type: String,
    required: 'Package name is mandatory'
  },
  description: String,
  longdescrip: String,
  duration: Number,
  price: {
    type: Number,
    required: 'Package price is mandatory'
  },
  fromDate: Date,
  endDate : Date },
  { collection: 'package' });

module.exports = mongoose.model('Package', PackageSchema );
