const mongoose = require('mongoose');
const User = require('../models/user.models.js');
const Item = require('../models/item.models.js');
mongoose.connect('mongodb//localhost/itp', {useNewUrlParser: true});

const ListingSchema = mongoose.Schema({
    seller: {
        type: User.schema,
        required: true
    },
    item: {
        type: Item.schema,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = mongoose.model('Listing', ListingSchema);