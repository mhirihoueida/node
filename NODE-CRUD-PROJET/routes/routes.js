import express from 'express'
//importer passport 
import passport from 'passport'
// importer le module concernant le token 
import jwt from 'jsonwebtoken'

// importer notre fonction globale , à fin d'évite d'écrire à chaque fois le try / catch 

import { catchErrors } from '../helpers.js'


//importer  nos fonctions , nos requettes qui agissent sur notre base de données 
import {getTest,
        postTest,
        addProduit,
        getProduits,
        getCategory,
        getStock,
        getProduit,
        updateProduit,
        deleteProduit
    } from '../controllers/produitControllers.js'



/*// Path avec ES module (ça nous permettera de faire les passe facilement, parceque on utilise une version plus avancé de node)
import path,{ dirname } from 'path'
import  { fileURLToPath } from 'url'
const__filename = fileURLToPath(import.meta.url)
const__dirname = dirname(__filename)
remarque : pas besoin de l'avoir , il y est déja dans notre version de node avancé*/



// 
const router = express.Router()


/*// les 2 routes pour executer la fonction getTest (qui est notée dans le  fichier produitControllers.js)
router.get('/' ,getTest)

router.get('/test' ,getTest)

// la route pour excuter la fonction postTest 
router.post('/testpost' ,postTest)*/

//la route pour excuter la fonction getProduits
router.get('/api/produits',catchErrors(getProduits))

//la route pour excuter la fonction getProduit
router.get('/api/produits/:id',catchErrors(getProduit))

//la route pour excuter la fonction getCategory
     router.get('/api/category',catchErrors(getCategory))

//la route pour excuter la fonction getStock
router.get('/api/stock',catchErrors(getStock))




//la route pour excuter la fonction addProduit
router.post('/api/produits',catchErrors(addProduit))


//la route pour excuter la fonction updateProduit(patcher un produit)
router.patch('/api/produits/:id',catchErrors(updateProduit))
 
//la route pour excuter la fonction deleteProduit(supprimer un produit)
router.delete('/api/produits/:id',catchErrors(deleteProduit))

//la route pour assurer l'authentification(la création de compte)

router.post(
  '/signup',
  passport.authenticate('signup', { session:false}),
  async (req, res, next) => {
    res.json({
      message: 'Signup OK',
      user: req.user
    })
  }


)
// la route pour  le login , tous d'abord voir si email existe , puis comparer les deux mot de passe (password donné et password enregistré)


router.post('/login', (req, res, next) => {
  passport.authenticate('login',async(err, user) =>{
    try{
      if(err || !user)  {
        const error = new Error('une erreur est survenue.')
        return next(error)
      }
      
      req.login(user, { session:false},async error =>{
        if (error) return next(error)

        const body = {_id:user._id, email: user.email}
        const token = jwt.sign({ user: body }, 'mot_de_passe')


        res.json({token})
      } )

    }catch(error){
     return next(error)

    }

  })(req, res, next)
})
  




//react 

//si jamais il y a rien de tous ça , il faut lui dire que par default il doit utiliser ce route 

router.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })



export default router