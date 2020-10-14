const http= require('http');  //http module can be used globally...if absolut or relative path
                             
const server=http.createServer((req,res) => { //createserver method: Request listner(take two arguments)
                                            // Request and rsponse
                                            // return server
    console.log(req.url, req.method, req.headers);  //2. method:GET url:/ but if we change to /Test
                                                          // /test
    
});
server.listen(3000);
