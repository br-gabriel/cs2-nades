const Map = require('../models/maps');

exports.submitMap = async (req, res) => {
    const { name , image } = req.body;
    const newMap = new Map({ name, image });
    await newMap.save();
    res.json({ message: 'Map added successfully' });
}