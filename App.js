const http= require('http');
  //http module is a core module of Node.js
//http module can be used globally...if absolut or relative path
const fs=require('fs');                  //It is useful to perform all file I/O operations synchronously and asynchronously.           
const server=http.createServer((req,res) => { // The request object can be used to get information 
                                              //about the current HTTP request e.g., url, request header, and data. 
                                             // The response object can be used to send a response for a current HTTP request. 
    const url=req.url;
    const method =req.method;
     if(url==='/'){
        res.setHeader('content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first Node.js server</title></head>');
        res.write('<body><form action="/message" method=POST> <input type="text"><button type="submit">SEND</button></input></form></body>')
        res.write('</html>');   
        return res.end();
     }                                              //2. method:GET url:/ but if we change to /Test
   
     if(url==='/message' && method==='POST'){   
        fs.writeFileSync('message.txt', 'Dummy');//create a new file 
        res.writeHead(302, {'Location' : '/'});  //302: status code for redirection  2)set header method
       return res.end();                         //writeHead() method. This method sends an 
                                                //HTTP status code and a collection of response headers back to the client. 
     }
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
