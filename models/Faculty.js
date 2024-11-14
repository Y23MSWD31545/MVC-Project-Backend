const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  facultyName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Faculty', facultySchema);
