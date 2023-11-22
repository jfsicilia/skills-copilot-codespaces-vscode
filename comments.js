// Create web server.
// 1. Create a web server.
// 2. Create a request handler.
// 3. Start the web server and listen for requests.
// 4. Read the comments file.
// 5. Convert the comments file from a string to an object.
// 6. Add a new comment to the comments object.
// 7. Convert the comments object to a string.
// 8. Write the comments string back to the comments file.
// 9. Redirect the user to the comments page.
// 10. Send the stringified comments back to the user.

// 1. Create a web server.
var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var port = 3000;
var ip = '