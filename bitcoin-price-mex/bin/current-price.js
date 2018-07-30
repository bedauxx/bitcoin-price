var http = require('https');

var options = {
  host: 'www.bitmex.com',
  path: '/api/v1/instrument?symbol=XBTUSD&columns=lastPrice'
};

function getCurrentPrice(currency, callback) {
  var req = http.request(options, function(res) {
    var data = '';
    res.on('data', function(chunk) {
      data += chunk;
    });

    res.on('end', function() {
      var json = JSON.parse(data);
      callback(json[0].lastPrice + ' ' + currency);
    });

    res.on('error', function() {
      callback('Bitmex not available');
    });
  });

  req.end();
}

module.exports = getCurrentPrice;
