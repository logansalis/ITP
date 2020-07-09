const item = require('../controllers/item.controllers.js');

module.exports = (app) => {
    app.get('/api/items', item.getAllItems);
    app.get('/api/items/category', item.getItemCategory)
    app.get('/api/items/type', item.getItemType)
    app.get('/api/items/:id', item.getItem);
    app.get('/api/items/search/:search', item.getItemsBySearch);
    app.get('/api/items/type/:type', item.getItemsByType);
    app.post('/api/items/new', item.createItem);
    app.delete('/api/item/:id', item.delete);
}