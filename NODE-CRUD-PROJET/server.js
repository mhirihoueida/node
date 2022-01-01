//importer les modules

import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/routes.js'
import privateRoutes from './routes/privateRoutes.js'
// dans privateRoutes , on a utilisé passport (du coup , on est obligé de le rajouté ici)
import passport from 'passport'

import './auth/auth.js'



import dotenv from'dotenv'









//lancer les modules
dotenv.config()

//ici on déclare notre port (remarque , j'ai changé le port de 3000 à 5000, parceque react prend par defaut le prot 3000)
const PORT = process.env.PORT || 5000

//ici on lance notre application express
const app =express()
//pour indiquer à express qu on peut utiliser des données json 
app.use(express.json())
//par la on lance l'express statique, dans notre dossier client àfin d'étendre notre site sur la port 5000, celle du node.
app.use(express.static('client/build'))
//configurer mongoose(faire des paramétrages pour que l'application tient un peu plus longtemps prceque il y a des api qui risque d'étre dépréciée dans le futur),et lui attribuer des options .
mongoose.connect(process.env.MONGODB,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true

})



// Middelwar (tous ce qui se passe au milieu)

//l'utilisation de token , à fin de se connecté en privé
app.use('/private',passport.authenticate('jwt',{ session: false }),
privateRoutes

)








app.use(routes)


























//ici , on écoute notre application express

app.listen(PORT,() => {
    console.log(`le serveur est lancé sur le port : ${PORT}`)

}) 

