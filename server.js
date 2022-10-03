var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require('path');
var productService = require('./product-service.js');

app.use(express.static('public'));
// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"/views/index.html"));
});

app.get("/categories", (req, res) => {
    res.sendFile(path.join(__dirname+"/views/index.html"));
});

app.get("/products", (req, res) => {
    res.sendFile(path.join(__dirname+"/views/index.html"));
});

app.get("/demos", (req, res) => {
    res.sendFile(path.join(__dirname+"/views/index.html"));
});



// setup http server to listen on HTTP_PORT
productService.initialize()
.then((data) => {
    app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));
})
.catch(() => {
    console.log("There was an error initializing");
})