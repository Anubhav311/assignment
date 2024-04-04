const express = require('express');
const {createProduct, getProductById, updateProduct, deleteProduct} = require('../controller/controller.js')

const router = express.Router();

router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;