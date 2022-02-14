const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');


const router = express.Router();

router.get('/:userId', asyncHandler(async function (req, res) {

    if(req.params.userId > 3){

        const bookings = await db.Booking.findAll({where: {userId: req.params.userId}});
        console.log(bookings, "bookings")
        if(bookings.lenght === 0){
            return res.json(bookings)
        }else {
            const bookingsDemo = await db.Booking.findAll();
            return res.json(bookingsDemo)
        }
    }
    const bookings1 = await db.Booking.findAll({where: {userId: req.params.userId}});

    return res.json(bookings1);
})
);

router.post("/:userId", asyncHandler(async function (req, res) {
    const newBooking = await db.Booking.create(req.body);
    return res.json(newBooking);
}));


router.delete("/:userId/:bookingId", asyncHandler(async function (req,res){

    const bookingId = req.params.bookingId;

    const booking = await db.Booking.findByPk(bookingId);

    if(!booking){
        throw new Error('Unable to delete booking')
    }

    await booking.destroy();

    return res.json(bookingId);
}));
module.exports = router;
