exports.handler = async function(event, context) {
  // Do stuff here
  try {
return {
    body: JSON.stringify({ event, context }),
    statusCode: 200
  };
  }catch(e) {
  	return {
    body: JSON.stringify(e),
    statusCode: 200
  };
  }
  
};