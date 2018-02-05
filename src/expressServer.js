const express = require('express');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
require('es6-promise').polyfill();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();
const port = 3001;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/getData', (req, res) => {
    const searchKey = req.param('input');
    console.log(req.query);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
        }
    };
    console.log("HERE" + searchKey);
    request.open('GET', `http://services.groupkt.com/country/get/iso2code/${searchKey}`, false);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    request.setRequestHeader('Accept', 'application/json');
    request.send('');
    var response = [request.responseText, request.status];
    res.send(response);

})


app.listen(port, () => console.log(`App listening on port  ${port}`))