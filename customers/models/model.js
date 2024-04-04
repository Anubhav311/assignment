const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function getProductsModel() {
    return customers;
}

const getProductByIdModel = async (id) => {
    return await prisma.product.findUnique({
        where: { id: parseInt(id) }
    });
}

const getAllProductsModel = async () => {
    return await prisma.product.findMany();
}

async function createProductModel(name, price) {
    const Product = await prisma.product.create({
        data: {
            name,
            price
        }
    })
}

const updateProductModel = async (id, data) => {
    return await prisma.product.update({
        where: { id: parseInt(id) },
        data: { ...data }
    });
}

const deleteProductModel = async (id) => {
    return await prisma.product.delete({
        where: { id: parseInt(id) }
    });
}

module.exports = {
    getProductsModel,
    getProductByIdModel,
    getAllProductsModel,
    createProductModel,
    updateProductModel,
    deleteProductModel
};