var geoip = require('geoip-country-lite');

exports.handler = function(event, context, callback) {
  var ip = "207.97.227.239";
  var geo = geoip.lookup(ip);

  callback(null, {
    statusCode: 200,
    body: geo
  });
}
