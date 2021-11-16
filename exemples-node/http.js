//Appel au module web server

const http = require("http");

//Création du serveur et de sa fonction de réponse aux requetes 

const server = http.createServer ((requete,result)=> {
    result.statusCode=200;
    result.setHeader("Content-Type","Text/html");
    result.end("Bonjour depuis <strong>Node.js</strong>!");
    console.log (requete.method+""+requete.url);
    console.log (""+requete.headers['user-agent']);

});

// déclaration de l'ip et du port de notre serveur web 

const hostname = "127.0.0.1";
const port = 8080;


//lancement de l'écoute du serveur  

server.listen(port,hostname, ()=> {
    console.log(`Serveur web NODE.JS lancé à l'adresse http://${hostname}:${port}/`);

});

