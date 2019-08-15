var GeoIpNativeLite = require('geoip-native-lite');

exports.handler = function(event, context, callback) {
  GeoIpNativeLite.loadDataSync();
  var country = GeoIpNativeLite.lookup('198.169.246.30');
  callback(null, {
    statusCode: 200,
    body: country
  });
}
