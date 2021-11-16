/*Ce que nous faisons sont :
– import expresset corsmodules :

Express est pour construire l'API Rest
cors fournit un middleware Express pour activer CORS avec diverses options.
– créez une application Express, puis ajoutez un analyseur corporel ( jsonet urlencoded) et des corsmiddlewares à l'aide de la app.use()méthode. Notez que nous définissons l'origine : http://localhost:8081.
– définir une route GET simple à tester.
– écouter sur le port 8080 pour les requêtes entrantes.*/


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require ("./app/models");

db.sequelize.sync();
// drop the table if il already exists 
//db.sequelize.sync({ force: true }).then (()=>{
  //console.log("Drop and re-sync db.");
//}); 



 //simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
}); 


require("./app/routes/turorial.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

