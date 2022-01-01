import express from 'express'
//importer les fonctions de controllers
//importer la fonction globale try/catch de helpers.js



const router = express.Router()
/* à ce niveau , on rajoute les routes ,des fonctions qui nous permettent de modifier ,de supprimer les produits et d'ajouter des produits .
remarque ,il faut pas oublier d'importer les fonctions qui vont avec de controllers/produitControllers.js,
et d'importer également la fonction  try/catch de fichiers helpers.js*/


router.get('/secret' , (req, res) => {
    res.json({
        message: 'Haha tu es connecté au secret',
        user:req.user,
        token:req.query.token
    })
})


export default router



/* remarque: au niveau des req.http , et aprés la privatisation des routes , il y a un changement à faire aux nivx des liens http , pour ajouter ,modifier ou supprimer un produit , 
exemple : pour ajouter un produit 
etat initaile : 
POST http://localhost:5000/api/produits HTTP/1.1
Content-Type: application/json

{
    
	"name":"samsung s6" ,
	"category":"smartphone",
	"stock":10
	

}
etat aprés le changement :
POST http://localhost:5000/private/api/produits?token=...............HTTP/1.1
Content-Type: application/json

{
    
	"name":"samsung s6" ,
	"category":"smartphone",
	"stock":10
	

}

et aprés ces changements nos routes seront utilisables en prenant compte de la privatisation */



