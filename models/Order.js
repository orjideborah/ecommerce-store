// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    totalAmount: Number,
    status: { type: String, default: 'Pending' },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);