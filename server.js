var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

app.use('/', express.static('./public/index.html'));

app.get('/api/*', function(req, res) {
    console.log(req.originalUrl);
    res.writeHead(302, {
        'Location': 'http://habit-server.herokuapp.com' + req.originalUrl
    });
    res.end();
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


