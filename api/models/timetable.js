const mongoose = require('mongoose');

const { Schema } = mongoose;

const TimetableSchema = new Schema({
  fromDate: {
    type: Date,
    required: 'FromDateTime is mandatory'
  },
  toDate: {
    type: Date,
    required: 'ToDateTime is mandatory'
  },
  instructorId: String,
  instructorName: String,
  yogaId : String,
  yoga: {
    type: String,
    required: 'Yoga Type is mandatory'
  } },
  { collection: 'timetable' });

module.exports = mongoose.model('Timetable', TimetableSchema );
