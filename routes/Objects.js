const {Router} = require('express')
const ObjectLost = require("../modals/ObjectLost");

const router  = Router();

router.get('/', (req , res) => {
    res.send("here are all the objects lost and found")
})

router.post('/object-lost'  , async (req , res) => {
    console.log(req.body)
    const {loser , obj , placeOfLost , dateOfLost} = req.body;

    const newObjectLost = new ObjectLost({loser , obj , placeOfLost , dateOfLost})



})

module.exports = router
