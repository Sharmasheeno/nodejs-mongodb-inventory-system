const InventoryItem = require('../models/InventoryItem');

// @desc    Get all items
// @route   GET /api/inventory
// @access  Public (or Private)
exports.getItems = async (req, res) => {
    try {
        const items = await InventoryItem.find().sort({ date: -1 });
        res.json(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Get single item
// @route   GET /api/inventory/:id
// @access  Public
exports.getItemById = async (req, res) => {
    try {
        const item = await InventoryItem.findById(req.params.id);
        if (!item) return res.status(404).json({ msg: 'Item not found' });
        res.json(item);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'Item not found' });
        res.status(500).send('Server Error');
    }
};

// @desc    Add new item
// @route   POST /api/inventory
// @access  Private
exports.addItem = async (req, res) => {
    const { name, quantity, price, category, description } = req.body;

    try {
        const newItem = new InventoryItem({
            name,
            quantity,
            price,
            category,
            description
        });

        const item = await newItem.save();
        res.json(item);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Update item
// @route   PUT /api/inventory/:id
// @access  Private
exports.updateItem = async (req, res) => {
    const { name, quantity, price, category, description } = req.body;

    // Build object
    const itemFields = {};
    if (name) itemFields.name = name;
    if (quantity) itemFields.quantity = quantity;
    if (price) itemFields.price = price;
    if (category) itemFields.category = category;
    if (description) itemFields.description = description;

    try {
        let item = await InventoryItem.findById(req.params.id);
        if (!item) return res.status(404).json({ msg: 'Item not found' });

        item = await InventoryItem.findByIdAndUpdate(
            req.params.id,
            { $set: itemFields },
            { new: true }
        );

        res.json(item);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Delete item
// @route   DELETE /api/inventory/:id
// @access  Private
exports.deleteItem = async (req, res) => {
    try {
        const item = await InventoryItem.findById(req.params.id);
        if (!item) return res.status(404).json({ msg: 'Item not found' });

        await InventoryItem.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Item removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
