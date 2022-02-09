const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');


const router = express.Router();


router.get('/', asyncHandler(async function (req, res) {
    const listings = await db.Listing.findAll();
    return res.json(listings);
})
);


router.post("/", asyncHandler(async function (req, res){
    const newListing = await db.Listing.create(req.body);
    return res.json(newListing);
}));

module.exports = router;
