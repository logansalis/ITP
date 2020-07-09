const wish = require('../controllers/wish.controllers.js');

module.exports = (app) => {
    app.get('/api/wishes', wish.getAllWishes);
    app.get('/api/wishes/recent', wish.getRecentWishes);
    app.get('/api/wishes/type', wish.getWishType)
    app.get('/api/wishes/item/:id', wish.getWishesByItem);
    app.get('/api/wishes/user/:id', wish.getUserWishes);
    app.get('/api/listings/type/:type', wish.getWishesByType);
    app.post('/api/wishes/new', wish.create);
    app.delete('/api/wishes/:id', wish.delete);
}