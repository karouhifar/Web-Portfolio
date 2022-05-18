// ---------------------------------
// ---    Main serve side        ---
// ---                           ---
// ---                           ---
// ---                           ---
// ---------------------------------
const functions = require("firebase-functions");
const express = require("express");
const expHBS = require("express-handlebars");
const cors = require("cors");
const path = require("path");
const http = require("http");
const { error } = require("jquery");
const app = express();

const HTTP_PORT = process.env.PORT || 9000;

// --- Show the current active page such as Home, about, contact pages
let headerData = {
  homeData: false,
  aboutData: false,
  contactData: false,
};

//--------------------- MiddleWares ---------------------//

// config static file
app.use(express.static(path.join(__dirname, "../public")));
// Cross-Origin Resource Sharing
app.use(cors());
// View engine setup
app.engine("hbs", expHBS({ extname: ".hbs" }));
app.set("view engine", "hbs");

// viewed at http://localhost:8080 at index.html
app.get("/", function (req, res) {
  // res.status(200).sendFile(path.join(__dirname + '/public/index.html'));
  headerData.homeData = true;
  headerData.aboutData = false;
  headerData.contactData = false;
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  res.status(200).render("index", { layout: false, headerDATA: headerData });
});

app.get("/contact", function (req, res) {
  // res.status(200).sendFile(path.join(__dirname + '/public/contact.html'));
  headerData.homeData = false;
  headerData.aboutData = false;
  headerData.contactData = true;
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  res.status(200).render("contact", { layout: false, headerDATA: headerData });
});

app.get("/about", function (req, res) {
  // res.status(200).sendFile(path.join(__dirname + '/public/contact.html'));
  headerData.contactData = false;
  headerData.homeData = false;
  headerData.aboutData = true;
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  res.status(200).render("about", { layout: false, headerDATA: headerData });
});
app.use((req, res) => {
  res.status(404).render("error", { layout: false });
});
// TODO
// Run server using NodeJS localhost:9000
// app.listen(HTTP_PORT, () => console.log("listen to " + HTTP_PORT));
// Run server using Firebase severless function
exports.app = functions.https.onRequest(app);
