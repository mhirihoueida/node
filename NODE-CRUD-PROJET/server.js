//importer les modules

import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/routes.js'
import dotenv from'dotenv'








//lancer les modules
dotenv.config()

//ici on déclare notre port 
const PORT = process.env.PORT || 3000

//ici on lance notre application express
const app =express()
//pour indiquer à express qu on peut utiliser des données json 
app.use(express.json())
//configurer mongoose(faire des paramétrages pour que l'application tient un peu plus longtemps prceque il y a des api qui risque d'étre dépréciée dans le futur),et lui attribuer des options .
mongoose.connect(process.env.MONGODB,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,

})



// Middelwar (tous ce qui se passe au milieu)

app.use(routes)


























//ici , on écoute notre application express

app.listen(PORT,() => {
    console.log(`le serveur est lancé sur le port : ${PORT}`)

}) 

