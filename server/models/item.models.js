const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/itp', {useNewUrlParser: true});

const ItemSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    variation: {
        type: String,
        maxlength: [25, 'Cannot contain more than 25 characters.'],
    },
    pattern: {
        type: String,
        maxlength: [25, 'Cannot contain more than 25 characters.'],
    },
    diy: {
        type: Boolean,
        required: true,
    },
    size: {
        type: String,
        maxlength: [10, 'Cannot contain more than 10 characters.'],
    },
    source: {
        type: String,
        maxlength: [50, 'Cannot contain more than 25 characters.'],
        required: true,
    },
    type: {
        type: String,
        maxlength: [25, 'Cannot contain more than 25 characters.'],
    },
    category: {
        type: String,
        required: true,
        maxlength: [25, 'Cannot contain more than 25 characters.'],
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = mongoose.model('Item', ItemSchema);


