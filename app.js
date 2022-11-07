var http=require('http');
var fs=require('fs');
const server=createServer(function (req,res){
if(req.url==='/'){
res.writeHead(200,{'Content-Type':'text/html'})
    createReadStream('welcome.html').pipe(res);
}
else if(req.url==='/home' && req.method==='POST'){
var RawData='';
req.on('data',function(data){
RawData+= data;
})
req.on('end',function(){
var inputdata=new URLSearchParams(RawData);
res.writeHead(200,{'Content-Type':'text/html'})
res.write("<h1 style='color:blue'>"+"USER SUBMITTED DETAILS"+"</h1>")
res.write("<table style='font-color:blue, margin-left:auto, margin-right:auto' border=1 cellspacing=0><tr><th>NAME</th><th>"+inputdata.get('username')+"</th></tr>")
res.write("<tr><th>Password</th><th>"+inputdata.get('password')+"</th></tr>")
res.write("<tr><th>Age</th><th>"+inputdata.get('age')+"</th></tr>")
res.write("<tr><th>Mobile number</th><th>"+inputdata.get('mobileno')+"</th></tr>")
res.write("<tr><th>Email</th><th>"+inputdata.get('email')+"</th></tr>")
res.write("<tr><th>Gender</th><th>"+inputdata.get('gender')+"</th></tr>")
res.write("<tr><th>State</th><th>"+inputdata.get('state')+"</th></tr>")
res.write("<tr><th>Skills</th><th>"+inputdata.get('skill[]')+"</th></tr>")
res.write("</table>")
res.end();
})
}
})
server.listen(8000,function(){
console.log('server started at 8000');
})
