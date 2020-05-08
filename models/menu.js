const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const menuSchema = new Schema({
    name: { type: String, required: true },
    flavor: { type: String, required: true },
    readyToAdd: Boolean
}, { timestamps: true });

//  Create Model from our Schema
const Menu = mongoose.model('Menu', menuSchema);

// Export Menu Model
module.exports = Menu;