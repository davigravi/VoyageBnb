const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateListing = [
    check('description')
        .exists({checkFalsy:true})
        .notEmpty()
        .isLength({max:1000})
        .withMessage('Please provide a shorter description')
        .isLength({min:10})
        .withMessage('Please provide a longer description'),
    check('zipcode')
        .exists({checkFalsy:true})
        .notEmpty()
        .isLength({min:5})
        .withMessage('Please provide a 5 digit zipcode')
        .isLength({max:5})
        .withMessage('Please provide a 5 digit zipcode'),
    check('url')
        .exists({checkFalsy:true})
        .notEmpty()
        .isString()
        .withMessage('Please provide a valid url'),
    check('pricePerNight')
        .exists({checkFalsy:true})
        .notEmpty()
        .isInt()
        .withMessage('Please provide an Integer'),
    handleValidationErrors,

]




router.get('/', asyncHandler(async function (req, res) {
    const listings = await db.Listing.findAll();
    return res.json(listings);
})
);


// router.post("/", asyncHandler(async function (req, res) {
//     const newListing = await db.Listing.create(req.body);
//     return res.json(newListing);
// }));

router.post("/", validateListing, asyncHandler(async function (req, res) {
    const newListing = await db.Listing.create(req.body);
    return res.json(newListing);
}));


router.delete("/:id", asyncHandler(async function (req, res) {
    const id = req.params.id;
    const listing = await db.Listing.findByPk(req.params.id);
    const booking = await db.Booking.findOne({where: {listId: `${id}`}})

    if(!listing){
        throw new Error('Unable to delete spot')
    };
    if (booking){
        await booking.destroy();
    }
    await listing.destroy();

    return res.json(id);
}));

// router.put("/:id", asyncHandler(async function (req, res){


//     const listId = req.params.id;
//     const list = await db.Listing.findByPk(listId)

//     const {
//         userId,
//         name,
//         address,
//         city,
//         state,
//         zipcode,
//         description,
//         pricePerNight,
//         url,
//     } = req.body;

//     const data = {
//         userId,
//         name,
//         address,
//         city,
//         state,
//         zipcode,
//         description,
//         pricePerNight,
//         url,
//     }

//     await list.update(data);
//     return res.json(list);

// }))

router.put("/:id", validateListing, asyncHandler(async function (req, res){


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
