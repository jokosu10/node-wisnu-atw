var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    pic: String
    }, {
    timestamps: true
});

var furnitureSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    description: String,
    items: [itemSchema]
    }, {
    timestamps: true
});

module.exports = mongoose.model('Product', furnitureSchema);
