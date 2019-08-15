var geoip = require('geoip-country-lite');
global.geodatadir = '.'

exports.handler = function(event, context, callback) {
  var ip = "207.97.227.239";
  var geo = geoip.lookup(ip);

  callback(null, {
    statusCode: 200,
    body: geo
  });
}
