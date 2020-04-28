const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: 'Name is mandatory'
  },
  specialist: {
    type: String,
    required: 'Specilaize in is mandatory'
  },
  experience: {
    type: String,
    required: 'Experience is mandatory'
  },
  image: String,
  linkedIn: String,
  instagram: String,
  facebook: String,
  admin: Boolean
  },
  { collection: 'user' });

module.exports = mongoose.model('User', UserSchema );
