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

router.post("/:userId", asyncHandler(async function (req, res) {
    const newBooking = await db.Booking.create(req.body);
    return res.json(newBooking);
}));


router.delete("/:userId/:bookingId", asyncHandler(async function (req,res){
    console.log("checkpoing")
    const bookingId = req.params.bookingId;

    const booking = await db.Booking.findByPk(bookingId);

    if(!booking){
        throw new Error('Unable to delete booking')
    }

    await booking.destroy();

    return res.json(bookingId);
}));
module.exports = router;
