const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket,
};

async function newTicket(req, res) {
    res.render('tickets/new', {title: 'Add Ticket', flightId: req.params.id});
}

async function create(req, res) {
  try {
    req.body.flight = req.params.id;
    await Ticket.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/flights/${req.params.id}`);
}