const {Router} = require('express')
const ObjectLost = require("../modals/ObjectLost");
const ObjectFound = require("../modals/ObjectFound");

const router  = Router();

router.get('/object-lost', async (req , res) => {
    console.log(req.body)
    try {
        const objectsLost = await ObjectLost.find()
        if (!objectsLost) {
            throw new Error('no object lost yet')
        }
        res.status(200).json(objectsLost)
    }catch (err) {
        res.send(400).json({message: err.message})
    }
})

router.get('/object-found', async (req , res) => {
    console.log(req.body)
    try {
        const objectsFound = await ObjectFound.find()
        if (!objectsFound) {
            throw new Error('no object lost yet')
        }
        res.status(200).json(objectsFound)
    }catch (err) {
        res.send(400).json({message: err.message})
    }
})

router.post('/object-lost'  , async (req , res) => {
    console.log(req.body)
    const {loser , obj , placeOfLost} = req.body;
    const newObjectLost = new ObjectLost({loser , obj , placeOfLost})
    try {
        const theObjectLost = await newObjectLost.save();
        if(!theObjectLost) {
            throw new Error('there was an error saving the object lost')
        }
        res.status(200).json(theObjectLost)
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})

router.post('/object-found'  , async (req , res) => {
    console.log(req.body)
    const {founder , obj , placeOfFound} = req.body;
    const newObjectFound = new ObjectFound({founder , obj , placeOfFound})
    try {
        const theObjectFound = await newObjectFound.save();
        if(!theObjectFound) {
            throw new Error('there was an error saving the object found')
        }
        res.status(200).json(theObjectFound)
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})

module.exports = router
