const mongoose = require('mongoose');

const { Schema } = mongoose;

const YogaSchema = new Schema({
  yoga: {
    type: String,
    required: 'Yoga Name is mandatory'
  },
  description: String },
  { collection: 'yoga' });

module.exports = mongoose.model('Yoga', YogaSchema );
