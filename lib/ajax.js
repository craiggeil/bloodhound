var Promise = require('es6-promise').Promise;
var axios = require('axios');

module.exports = function ( o ) {
  var promise = new Promise( ( resolve, reject ) => {
    axios( { method: "get", url: o.url } )
      .then( ret => {
        resolve( ret.data );
      } )
      .catch( err => {
        reject( err );
      } );
  } );

  return promise;
};
