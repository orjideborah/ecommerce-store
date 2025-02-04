// models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    imageUrl: String,
});

module.exports = mongoose.model('Product', ProductSchema);