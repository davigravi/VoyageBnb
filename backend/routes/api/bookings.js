const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');


const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
    const bookings = await db.Booking.findAll();
    console.log(bookings, "this is bookings")
    return res.json(bookings);
})
);


module.exports = router;
