const user = require('../controllers/user.controllers.js');

module.exports = (app) => {
    // app.get('/api/login', user.login);
    app.get('/api/users', user.getAllUsers);
    app.get('/api/users/:id', user.getUser);
    app.post('/api/users/new', user.createUser);
    // app.post('/api/post/users/login', user.login);
    app.put('/api/users/:id', user.update);
    app.delete('/api/users/:id', user.delete);
}