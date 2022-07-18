
const { Schema, model } = require('mongoose')

const now = new Date().getTime();

const ObjectLostSchema = new Schema({
    loser : {
        name: String,
        level: Number,
        class: Number,
        required: true
    },
    obj: {
        objName: String,
        required: true,
    },
    placeOfLost: {
        place: String,
    },
    dateOfLost: {
        type: Number,
        default: now
    }

})

const ObjectLost = model('objectLost' , ObjectLostSchema);
module.exports = ObjectLost;