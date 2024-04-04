// models/Product.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllOrdersModel = async () => {
    return await prisma.order.findMany();
}

const getOrderByIdModel = async (id) => {
    return await prisma.order.findUnique({
        where: { id: parseInt(id) }
    });
}

const createOrderModel = async (data) => {
    return await prisma.order.create({
        data: { ...data }
    });
}

const updateOrderModel = async (id, data) => {
    return await prisma.order.update({
        where: { id: parseInt(id) },
        data: { ...data }
    });
}

const deleteOrderModel = async (id) => {
    return await prisma.order.delete({
        where: { id: parseInt(id) }
    });
}

module.exports = {
    getAllOrdersModel,
    getOrderByIdModel,
    createOrderModel,
    updateOrderModel,
    deleteOrderModel
};
