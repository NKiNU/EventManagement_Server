const express = require("express");
const router = express.Router();
const {
    seeAllEvents,
    bookEvent,
    viewBooking,
    cancelBooking
} = require('../controller/events');


router.get('/events', seeAllEvents);
router.post('/book', bookEvent);
router.get('/bookings/:id', viewBooking);
router.post('/cancel', cancelBooking);

module.exports = router;