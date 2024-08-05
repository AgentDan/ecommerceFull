const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const uploadSchema = new mongoose.Schema({
    cards: {
        type: String,
        required: true,
    },
    group: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    } ,
    timeCreated: {
        type: Date,
        default: () => Date.now(),
    },
    img: {
        type: String,
        default: "placeholder.jpg"
    },
    slug: {
        type: String,
        slug: "cards",
        unique: true,
        slug_padding_size: 2
    },
})

module.exports = mongoose.model('Upload', uploadSchema)