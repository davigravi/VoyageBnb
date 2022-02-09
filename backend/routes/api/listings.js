const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');


const router = express.Router();


router.get('/', asyncHandler(async function (req, res) {
    const listings = await db.Listing.findAll();
    return res.json(listings);
})
);


router.post("/", asyncHandler(async function (req, res) {
    const newListing = await db.Listing.create(req.body);
    return res.json(newListing);
}));


router.delete("/:id", asyncHandler(async function (req, res) {
    console.log("in back end")
    const id = req.params.id;
    const listing = await db.Listing.findByPk(req.params.id);
    const booking = await db.Booking.findOne({where: {listId: `${id}`}})
    console.log("booking", booking)

    if(!listing){
        throw new Error('Unable to delete spot')
    };
    if (booking){
        await booking.destroy();
    }
    await listing.destroy();

    return res.json(id);
}))


module.exports = router;
