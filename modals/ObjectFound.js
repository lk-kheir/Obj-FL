const { Schema, model } = require('mongoose')

const now = new Date().getTime()

const ObjectFoundSchema = new Schema({
    founder : {
        name: String,
        level: Number,
        class: Number,
        required: true
    },
    obj: {
       type: Schema.Types.ObjectId,
        ref: 'objectLost'
    },
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