const Item = require('../models/item.models.js');

const LIMIT = 50;

module.exports.getAllItems = (req, res) => {
    const page = res.query.page;
    Item.find().skip((page - 1) * LIMIT).limit(LIMIT)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getItem = (req, res) => {
    Item.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getItemsBySearch = (req, res) => {
    const page = req.query.page
    Item.find({name: new RegExp(req.params.search)}).skip((page - 1) * LIMIT).limit(LIMIT)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getItemsByType = (req, res) => {
    const page = req.query.page
    Item.find({type: req.params.type}).skip((page - 1) * LIMIT).limit(LIMIT)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getItemCategory = (req, res) => {
    Item.find().distinct('category')
        .then(data => res.json(data))
        .catch(err =>  res.json(err))
}

module.exports.getItemType = (req, res) => {
    Item.find().distinct('type')
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.createItem = (req, res) => {
    const item = new Item(req.body)
    item
        .save()
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.delete = (req, res) => {
    Item.deleteOne({_id: req.params.id})
        .then(() => res.json({message: "Deleted Item"}))
        .catch(err => res.json(err))
}