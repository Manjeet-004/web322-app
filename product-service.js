var categories = new Array();
var products = new Array();
var fs = require('fs');
var exports = module.exports = {};

exports.initialize = function() {
    fs.readFile('data/categories.json', 'utf-8', (err, data) => {categories = JSON.parse(data);});
    fs.readFile('data/products.json', 'utf-8', (err, data) => {products = JSON.parse(data);});

    return new Promise((resolve, reject) => {
        resolve("Init Success");
        reject("unable to read data");
    });
};

exports.getCategories = function(){
    return new Promise((resolve, reject) => {
        resolve(categories);
        if(categories.length == 0)
        reject("no results returned");
    });
};

exports.getPublishedProducts = function(){
    return new Promise((resolve, reject) => {
        let PublishedProducts = categories.filter(categories => categories.isPublishedProducts == true);
        resolve(PublishedProducts);
        if(categories.length == 0)
        reject("no results returned");
    });
};

exports.getAllProducts = function(){
    return new Promise((resolve, reject) => {
        resolve(products);
        if (products.length == 0)
        reject("no results returned");
    });

};  