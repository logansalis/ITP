const User = require('../models/user.models.js');
const bcrypt = require('bcrypt');
const oauth = require('../oauth/discord');

module.exports.login = (req, res) => {
    const discordData = oauth.discordLogin(req, res);
    res.json(discordData);
};

// module.exports.createUser = (req, res) => {
//     User.find({discordID: req.body.discoID})
//         .then(data => {
//             if(!data) {
//                 const user = new User(req.body);
//                 bcrypt
//                     .hash(user.access_token, 10)
//                     .then(hashed => {
//                         user.access_token = hashed;
//                         bcrypt
//                             .hash(user.refresh_token, 10)
//                             .then(hashed => {
//                                 user.refresh_token = hashed;
//                                 user.save()
//                                     .then(data => res.json(data))
//                                     .catch(err => res.json(err));
//                             })
//                             .catch(err => res.json(err));
//                     })
//                     .catch(err => res.json(err));
//             }
//             res.json(data);
//         })
//         .catch(err => res.json(err));
// }

module.exports.createUser = (req, res) => {
    const user = new User(req.body)
    user
        .save()
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    User.updateOne({_id: req.params.id}, req.body, {runValidators: true})
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.delete = (req, res) => {
    User.deleteOne({_id: req.params.id})
        .then(() => res.json({message: 'Deleted user'}))
        .catch(err => res.json(err))
}

module.exports.getAllUsers = (req, res) => {
    User.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getUser = (req, res) => {
    User.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}
