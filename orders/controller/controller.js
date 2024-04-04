const { getAllOrdersModel, getOrderByIdModel, createOrderModel } = require('../models/model.js');

async function getAllOrders(req, res) {
    try {
        const orders = await getAllOrdersModel();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getOrderById(req, res) {
    try {
        const order = await getOrderByIdModel(req.params.id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createOrder(req, res) {
    try {
        const newOrder = await createOrderModel(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function updateOrder(req, res) {
    try {
        const updatedOrder = await findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}



module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
};