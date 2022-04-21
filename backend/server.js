const http=require('http');
const path=require('path');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    let filepath=path.join(__dirname,'/',req.url=='/'?'index.html':req.url);
    let extname=path.extname(filepath);
    let contentType='text/html';
    switch(extname){
        case '.js':
          contentType='text/javascript';
          break;
        case '.css':
          contentType='text/css';
          break;
        case '.json':
          contentType='application/json';
          break;
        case '.png':
          contentType='image/png';
          break;
        case '.jpg':
          contentType='image/jpg';
          break;
    
      }
      //read file
  fs.readFile(filepath,(err,content)=>{
    if(err){
      if(err.code=='ENOENT'){
       //page not found
       fs.readFile(path.join(__dirname,'/','404.html'),
         (err,content)=>
         {
           res.writeHead(200,{'Content-Type':'text/html'});
           res.end(content,'utf-8');
         }
        )
      }
      //2nd type of error
     else
     {
      res.writeHead(500);
      res.end(`server Error:${err.code}`);
     }
    }else
     {
        //successfull response
         res.writeHead(200,{'Content-Type':contentType});
         res.end(content,'utf-8');
     }
    
  });

});
const PORT=process.env.PORT||5000;

server.listen(PORT,()=>console.log(`serving running on port ${PORT}`))