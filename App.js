const http= require('http');  //http module is a core module of Node.js
//http module can be used globally...if absolut or relative path
                             
const server=http.createServer((req,res) => { // The request object can be used to get information 
                                              //about the current HTTP request e.g., url, request header, and data. 
                                             // The response object can be used to send a response for a current HTTP request. 
    console.log(req.url, req.method, req.headers);  //2. method:GET url:/ but if we change to /Test
   
    // /test
    res.setHeader('content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Node.js server</title></head>');
    res.write('<body>Hey!!This is Ishita. I created my first node.js server.</body>')
    res.write('</html>');   
    res.end();//can't write anything after this
              //open developer tools -> network -> responses->headers
});

server.listen(3000);
