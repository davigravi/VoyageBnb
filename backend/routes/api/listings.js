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
}));

router.put("/:id", asyncHandler(async function (req, res){


    const listId = req.params.id;
    const list = await db.Listing.findByPk(listId)

    const {
        userId,
        name,
        address,
        city,
        state,
        zipcode,
        description,
        pricePerNight,
        url,
    } = req.body;

    const data = {
        userId,
        name,
        address,
        city,
        state,
        zipcode,
        description,
        pricePerNight,
        url,
    }

    await list.update(data);
    return res.json(list);

}))


module.exports = router;
