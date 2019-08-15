var path = require('path')
var fs = require('fs')

exports.handler = async (event, context) => {

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'pwd': path.resolve('.'),
        'dir': fs.readdirSync('.')
      })
    }

    // callback(null, {
    //   statusCode: 200,
    //   body: {
    //     'pwd': path.resolve('.'),
    //     'dir': fs.readdirSync('.')
    //   }
    // });
}
