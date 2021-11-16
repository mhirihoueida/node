//importer des modules 

const express =require('express')
   // path est un module qui te permet de te deplacer de n'importe dans ton projet 
   //pour retrouver ton fichier statique (ici index.html)

const path = require('path')
   // importer handlebars, qui permet de créer des templétes , rendre un html plus dynamique 

const exphbs = require('express-handlebars')   

//déclarer le port 
const PORT = process.env.PORT || 5003

// ici , on charge notre application express
const app = express()
// Middelwar (tous ce qui se passe au milieu)

   // indiquer  notre fichier static que express doit l'utiliser 
  //app.use(express.static('public'))//chemin relative
app.use(express.static(path.join(__dirname,'public')))// il va chercher tous seul le chemin absolu 
  //annocer l'existance de handlebars à express(en utilisant engine , qui est le service de templete, on lui dit qu il existe handlebars dans le module exphbs)
//app.engine('handlebars',exphbs())
app.engine('.hbs',exphbs({extname:'.hbs'}))
  //une fois dans l'application , on lui dit que tu va utiliser le service de templete , le view engine qui handlebards.
//app.set('view engine', 'handlebars')
app.set('view engine', '.hbs')

  //on lui dise qu il faut ma page acceuil affiche home.handlebars dans main.handlebars
    // on lui annonce les varibles title et subTitle et on fait le changement sur home.handlebars (entre deux accolades, de l'autre coté parceque c'est un objet javascripts )
      // premier route
app.get('/',(req,res) => 
   res.render('home', {title:'home', subTitle:'ma home page.'}))

    
      //deuxiéme route 
          //l'astuce de deux point surtout pas l'oublie 
app.get('/:title',(req,res) => {
           //récupére le title intreduit dans le lien (req)et le déclarer comme une variable const 
   const title = req.params.title
   res.render('about', {title , subTitle:`Ma page ${title}`})
  }
  )

//ici , on écoute notre application express
app.listen(PORT,()=>console.log(`server is listening on port ${PORT}`))


