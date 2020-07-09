const Wish = require('../models/wish.models.js');
const Item = require('../models/item.models.js');
const User = require('../models/user.models.js');

const LIMIT = 50;

module.exports.getAllWishes = (req, res) => {
    const page = req.query.page;
    Wish.find().skip((page - 1) * LIMIT).limit(LIMIT)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getRecentWishes = (req, res) => {
    Wish.find().sort('-created_at').limit(12)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getWishesByItem = (req, res) => {
    const page = req.query.page;
    Wish.find({'item._id': req.params.id}).skip((page - 1) * LIMIT).limit(LIMIT)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getUserWishes = (req, res) => {
    const page = req.query.page;
    Wish.find({'user._id': req.params.id}).skip((page - 1) * LIMIT).limit(LIMIT)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getWishesByType = (req, res) => {
  Wish.find({'item.type': req.params.type})
      .then(data => res.json(data))
      .catch(err => res.json(err))
}

module.exports.getWishType = (req, res)=> {
    Wish.find().distinct('item.type')
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {
    Item.findOne({'_id': req.body.item})
        .then(item_data => {
            User.findOne({'_id': req.body.user})
                .then(user_data => {
                    const wish = new Wish();
                    wish.item = item_data;
                    wish.user = user_data;
                    wish.save()
                        .then(data => res.json(data))
                        .catch(err => res.json(err))
                })
                .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
}

module.exports.delete = (req, res) => {
    Wish.deleteOne({_id: req.params.id})
        .then(() => res.json({message: "Deleted Wish"}))
        .catch(err => res.json(err))
}