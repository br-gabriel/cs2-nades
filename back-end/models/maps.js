const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;