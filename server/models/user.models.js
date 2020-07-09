const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/itp', {useNewUrlParser: true});

const UserSchema = mongoose.Schema({
    // access_token: {type: String,
    //     required: [true, 'Please provide a valid access token']
    // },
    // refresh_token: {type: String,
    //     required: [true, 'Please provide a valid refresh token']
    // },
    // discord_id: {
    //     type: String,
    //     required: [true, 'Must have Discord ID.']
    // },
    // guild_id: {type: String,
    //     required: [true, 'Please provide a valid guild ID'],
    // },
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength: [3,'Name must contain at least 3 characters']
    },
    // avatar: {
    //     type: String,

    // },
    character: {
        type: String,
        maxlength: [10, 'Character name cannot be longer than 10 characters.']
    },
    island: {
        type: String,
        maxlength: [10, 'Island name cannot be longer than 10 characters.']
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true,
    },
    updated_at: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = mongoose.model('User', UserSchema);