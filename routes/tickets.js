const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// GET /tickets/new (new functionality)
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST /flights/show (create functionality)
// router.post('/flights/show', ticketsCtrl.create);
// POST /flights/:id/tickets (create ticket for flight)
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;