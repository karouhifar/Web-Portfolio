const functions = require("firebase-functions");
const express = require("express");
const exphbs = require("express-handlebars");
const cors = require('cors');
const path = require("path");
const http = require('http')
const app = express();

//  const HTTP_PORT = process.env.PORT || 9000;

//--------------------- MiddleWares ---------------------//

// config static file
// app.use('/public', express.static(path.join(__dirname, 'public')));
// Cross-Origin Resource Sharing
app.use(cors());
// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// viewed at http://localhost:8080 at index.html
app.get('/', function(req, res) {
    // res.status(200).sendFile(path.join(__dirname + '/public/index.html'));
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.status(200).render('index',{layout:false});
});

app.get('/contact', function(req, res) {
    // res.status(200).sendFile(path.join(__dirname + '/public/contact.html'));
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.status(200).render('contact', {layout:false} );
});
// npm run shell
app.get('/about', function(req, res) {
    // res.status(200).sendFile(path.join(__dirname + '/public/contact.html'));
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.status(200).render('about', {layout:false} );
});
app.use((req, res) => {
    res.status(404).send("<h1 style='display:flex; justify-content:center; align-items: center; height: 80%;'>Page Not Found - 404</h1>");
  });


exports.app = functions.https.onRequest(app);