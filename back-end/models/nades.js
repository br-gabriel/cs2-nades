const mongoose = require('mongoose');

const nadeSchema = new mongoose.Schema({
    map: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Map'
    },
    size: {
        type: String,
        required: true,
        validateIn: ['CT', 'TR']
    },
    type: {
        type: String,
        required: true,
        validateIn: ['smoke', 'flash', 'molotov', 'he']
    },
    tags: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Nade = mongoose.model('Nade', nadeSchema);

module.exports = Nade;