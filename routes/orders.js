// routes/orders.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
    const order = new Order({
        items: req.body.items,
        totalAmount: req.body.totalAmount,
    });

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;