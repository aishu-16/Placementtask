// routes.js
const express = require('express');
const router = express.Router();
const dataController = require('./controllers/dataController');

// Import sample data
router.post('/import-data', dataController.importData);

// Filter data
router.get('/filter-data', dataController.filterData);

module.exports = router;
