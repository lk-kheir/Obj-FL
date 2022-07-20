const { Schema, model } = require('mongoose')

const now = new Date().getTime()
// let's see what's going on on the day that you signed up man I can never see you again
const ObjectFoundSchema = new Schema({
    founder : {
        name: String,
        level: Number,
        class: Number,
    },
    obj: Schema.Types.ObjectId,
    placeOfFound: {
        place: String,
    },
    dateOfFound: {
        type: Number,
        default: now
    }

})

const ObjectFound = model('objectFound' , ObjectFoundSchema);

module.exports = ObjectFound;