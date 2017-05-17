var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
    secret: new Buffer('nDlmoNQJoktVa5O4xh8FCYQoPDnBo3dtFJcBMoK0Zk1_45XJyAQjevowk3U7_dFl', 'base64'),
    audience: 'q_WPQMoYJToeGzBqNi-IY9Sk2s-vCg7B'
});

app.get('/api/public', function (req, res) {
    res.json({ message: "Hello from a public endpoint! you don't need to be authenticated to see this"});

});

app.get('/api/private', authCheck, function (req, res) {
    res.json({ message: "Hello from a private endpoint! you do need to be authenticated"});

});

app.listen(3001);
console.log('Listening on http://localhost:3001');