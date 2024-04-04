const express = require('express');
const {createOrder, getOrderById, updateOrder, deleteOrder, getAllOrders} = require('../controller/controller.js')

const router = express.Router();

router.get('/orders', getAllOrders)
router.get('/orders/:id', getOrderById);
router.post('/orders', createOrder);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

module.exports = router;