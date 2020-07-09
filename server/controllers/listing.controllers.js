const Listing = require('../models/listing.models.js');
const Item = require('../models/item.models.js');
const User = require('../models/user.models.js');

const LIMIT = 50;

module.exports.getAllListings = (req, res) => {
    const page = req.query.page;
    Listing.find().skip((page - 1) * LIMIT).limit(LIMIT)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getRecentListings = (req, res) => {
    Listing.find().sort('-created_at').limit(12)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getUserListings = (req, res) => {
    const page = req.query.page;
    Listing.find({'seller._id': req.params.id}).skip((page - 1) * LIMIT).limit(LIMIT)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getListingsByItem = (req, res) => {
    const page = req.query.page;
    Listing.find({'item._id': req.params.id}).skip((page - 1) * LIMIT).limit(LIMIT)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getListingsByType = (req, res) => {
    const page = req.query.page;
    Listing.find({'item.type': req.params.type}).skip((page - 1) * LIMIT).limit(LIMIT)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports.getListingType = (req, res) => {
    Listing.find().count()
        .then(total => {
            Listing.find().distinct('item.type')
            .then(data => res.json({'types':data, 'total': total}))
            .catch(err => res.json(err))
        
        })
        .catch(err => res.json(err))
    
}

module.exports.create = (req, res) => {
    Item.findOne({'_id': req.body.item})
        .then(item_data => {
            User.findOne({'_id': req.body.user})
                .then(user_data => {
                    const listing = new Listing();
                    listing.item = item_data;
                    listing.seller = user_data;
                    listing.save()
                        .then(data => res.json(data))
                        .catch(err => res.json(err))
                })
                .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
}

module.exports.delete = (req, res) => {
    Listing.deleteOne({_id: req.params.id})
        .then(() => res.json({message: "Deleted Listing"}))
        .catch(err => res.json(err))
}