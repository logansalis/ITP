const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
require('./server/routes/user.routes.js')(app);
require('./server/routes/item.routes.js')(app);
require('./server/routes/listing.routes.js')(app);
require('./server/routes/wish.routes.js')(app);
require('./server/oauth/discord.js')(app);
app.use(express.static( __dirname + '/public/dist/public' ));
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
// app.get('/ITP', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(8000, () => {console.log('Running on port 8000')});


app.use((err, req, res, next) => {
    switch (err.message) {
      case 'NoCodeProvided':
        return res.status(400).send({
          status: 'ERROR',
          error: err.message,
        });
      default:
        return res.status(500).send({
          status: 'ERROR',
          error: err.message,
        });
    }
});



