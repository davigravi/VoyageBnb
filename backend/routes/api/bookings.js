const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');


const router = express.Router();

router.get('/:userId', asyncHandler(async function (req, res) {
    console.log("checkpoint in backend")
    const bookings = await db.Booking.findAll({where: {userId: req.params.userId}});
    console.log(bookings)
    return res.json(bookings);
})
);


module.exports = router;
