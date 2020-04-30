const mongoose = require('mongoose');

const { Schema } = mongoose;

const TimetableSchema = new Schema({
  fromDate: {
    type: Date,
    required: 'FromDate is mandatory'
  },
  toDate: {
    type: Date,
    required: 'ToDate is mandatory'
  },
  fromTime: {
    type: Date,
    required: 'FromTime is mandatory'
  },
  toTime: {
    type: Date,
    required: 'ToTime is mandatory'
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
