const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const inventoryController = require('../controllers/inventoryController');

// Public Routes
router.get('/', inventoryController.getItems);
router.get('/:id', inventoryController.getItemById);

// Protected Routes
router.post('/', auth, inventoryController.addItem);
router.put('/:id', auth, inventoryController.updateItem);
router.delete('/:id', auth, inventoryController.deleteItem);

module.exports = router;
