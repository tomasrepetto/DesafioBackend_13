// src/controllers/productsController.js
import productsServices from '../services/productsServices.js';
import { CustomError } from '../middleware/errorHandler.js';

export const addProductController = async (req, res, next) => {
    const { title, price, ...rest } = req.body;
    if (!title || !price) {
        return next(new CustomError('MissingFieldsError'));
    }
    try {
        const product = await productsServices.addProductService({ title, price, ...rest });
        res.status(201).json(product);
    } catch (error) {
        next(new CustomError('ValidationError', error.message));
    }
};

export const getProductsController = async (req, res, next) => {
    try {
        const products = await productsServices.getProductsServices();
        res.status(200).json(products);
    } catch (error) {
        next(new CustomError('ValidationError', 'Error al obtener productos'));
    }
};




