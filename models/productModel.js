const db = require('../config/db');

const Product = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM products');
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
        return rows[0];
    },

    create: async (product) => {
        const { name, price, description } = product;
        const [result] = await db.query(
            'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
            [name, price, description]
        );
        return { id: result.insertId, ...product };
    },

    update: async (id, product) => {
        const { name, price, description } = product;
        const [result] = await db.query(
            'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?',
            [name, price, description, id]
        );
        return result.affectedRows;
    },

    delete: async (id) => {
        const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
        return result.affectedRows;
    }
};

module.exports = Product;
