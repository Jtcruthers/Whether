
// Returns a different encodedURI location to be used as a 
// test location depending if origin is true or false
exports.getTestLocation = function(origin) {
  if(origin) 
    return encodeURI("Ohio Stadium Columbus OH");
  return encodeURI("St Louis MO");
}

