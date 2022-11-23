var http = require('http');
var n = require('./primeiromodulo');
var dia= require('./moduloData');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<b>Aula de Node.js</b><br>' );
    res.write('<i>Prof. Carlos Augusto</i><br>');
    res.write(n.nome()+'<br>');
    //res.write(Date());
    res.write(dia.diaDaSemana()+'<br>');
    res.end('<br>Bom dia!');

}).listen(2000);