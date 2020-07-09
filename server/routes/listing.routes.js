const listing = require('../controllers/listing.controllers.js');

module.exports = (app) => {
    app.get('/api/listings', listing.getAllListings);
    app.get('/api/listings/recent', listing.getRecentListings);
    app.get('/api/listings/type', listing.getListingType);
    app.get('/api/listings/seller/:id', listing.getUserListings);
    app.get('/api/listings/item/:id', listing.getListingsByItem);
    app.get('/api/listings/type/:type', listing.getListingsByType);
    app.post('/api/listings/new', listing.create);
    app.delete('/api/listings/:id', listing.delete);
}