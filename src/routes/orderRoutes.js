const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/order', orderController.createOrder);
router.get('/order/list', orderController.listOrders); // Rota list deve vir antes de :id para não conflitar
router.get('/order/:id', orderController.getOrderById);
router.put('/order/:id', orderController.updateOrder);
router.delete('/order/:id', orderController.deleteOrder);

module.exports = router;