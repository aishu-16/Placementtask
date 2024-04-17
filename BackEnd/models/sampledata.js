// models/SampleData.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleDataSchema = new Schema({
  // Define schema fields
});

module.exports = mongoose.model('SampleData', SampleDataSchema);
