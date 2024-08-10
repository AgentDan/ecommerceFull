const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    card: {
        type: String,
        required: true,
        unique: true
    },
    group: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Blog', blogSchema)