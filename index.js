var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('views'));

app.use('/*', express.static('./views/pages/index.html'));


app.get('*', function(req, res) {
  res.sendfile('./views/pages/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


