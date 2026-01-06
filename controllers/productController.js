const Product = require('../models/productModel');

const productController = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.getAll();
            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    getProductById: async (req, res) => {
        try {
            const product = await Product.getById(req.params.id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    createProduct: async (req, res) => {
        try {
            const { name, price, description } = req.body;
            if (!name || !price) {
                return res.status(400).json({ message: 'Name and price are required' });
            }
            const newProduct = await Product.create({ name, price, description });
            res.status(201).json(newProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { name, price, description } = req.body;
            const updatedRows = await Product.update(req.params.id, { name, price, description });
            if (updatedRows === 0) {
                return res.status(404).json({ message: 'Product not found or no changes made' });
            }
            res.status(200).json({ message: 'Product updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const deletedRows = await Product.delete(req.params.id);
            if (deletedRows === 0) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }
};

module.exports = productController;
