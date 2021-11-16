
const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const { nextTick } = require('process')
require('dotenv').config() 
const port = process.env.port  || 3000


const app = express()

//démarer le mouteur de notre templette qui est handlebars, qui est un générateur d'html
app.engine('handlebars',exphbs())
  //maintenant il faut l'intégrer a express 
app.set('view engine', 'handlebars')



//pour intégrer le fichier css
app.use(express.static('public'))


//indiquer là express le format dont le quel on va recevoir le donnée
   // pour les données un peu plus complexe 
app.use(express.json())
  // dans notre cas (on envoi le donnée depuis un formulaire html 5 , donc on utilise urlencoded)
app.use (express.urlencoded({extended: false}))


// app.use ça agit sur toutes les routes ,et ça permet de passer d'une route à l'autre 
app.use((req,res,next)  =>{
    const { method,path} = req
    console.log(`Méthode: ${method } | Path: ${path}`)
    next()
} )


// 1 er route qui affiche la premiére page reliée à un fichier html 
app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
   
})
     //localhost:8000

//2 eme route qui affiche le name enregistré dans le .env
app.get('/json',(req,res) => {
    const name = process.env.NAME 
    res.json({ name})
   
})  // localhost:8000/json

// 3 eme route qui affiche un name stockée

app.get('/json1',(req,res) => {
    
    res.json({ name : 'HOUEIDA'})
   
}) //localhost:8000/json1


// 1 ére méthode de récupération des données(la plus utilisée),possible de la faire avec les id 
app.get('/product/:name',(req,res) => {
    const name = req.params.name
    res.json({ name})
   
})



//2 éme méthode de récupération des données , à travers le lien .
app.get('/products',(req,res) => {
    const {couleur,taille}= req.query
    res.send(`couleur:${couleur},taille:${taille}`)
   
})
    //localhost:8000/products?couleur=rouge&taille=grand


//3éme méhode de récupération des données , à travers d'un formulaire (pour envoyer des données à l'api :
// c.a.d pour aller de front vers le back)

app.post('/product',(req,res) => {
    const { name,couleur  } = req.body
    res.json({ name,couleur})
   
})




// route pour afficher l'heure 
app.get('/heure',(req,res,next) => {
    const heure = new Date().toLocaleTimeString()
    req.heure = heure
    
    next()
}, 
(req,res) =>{
    // dans le cas normale 
//res.send(req.heure) 
    // dans le cas de handlebars il utulise les layouts
res.render('heure', {heure:req.heure}) 
}
)
   //localhost:8000/heure


   //l'annonce de port
app.listen (port, () => 
console.log(`le serveur nodemon est lancé sur le port :${port}`))