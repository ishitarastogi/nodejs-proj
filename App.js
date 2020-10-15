const http = require('http');          // require function is the easiest way to include 
 const Routes=require('./Routes')
 console.log(Routes.someText);                                      //modules that exist in separate files.
const server = http.createServer(Routes.Handler)
//we can't access route files like using "Routes.object"


server.listen(3000);
