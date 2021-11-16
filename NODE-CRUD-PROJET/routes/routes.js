import express from 'express'
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
// importer notre fonction globale , qui évite d'écrire à chaque fois le try / catch 
import { catchErrors } from '../helpers.js'



const router = express.Router()


// les 2 routes pour executer la fonction getTest (qui est notée dans le  fichier produitControllers.js)
router.get('/' ,getTest)

router.get('/test' ,getTest)

// la route pour excuter la fonstion postTest 
router.post('/testpost' ,postTest)

//la route pour excuter la fonction addProduit
router.post('/produit',catchErrors(addProduit))

//la route pour excuter la fonction getProduits
router.get('/produits',catchErrors(getProduits))

     //la route pour excuter la fonction getCategory
router.get('/category',catchErrors(getCategory))

     //la route pour excuter la fonction getStock
router.get('/stock',catchErrors(getStock))

//la route pour excuter la fonction getProduit
router.get('/produit/:id',catchErrors(getProduit))

//la route pour excuter la fonction updateProduit(patcher un produit)
router.patch('/produit/:id',catchErrors(updateProduit))
 
//la route pour excuter la fonction deleteProduit(supprimer un produit)
router.delete('/produit/:id',catchErrors(deleteProduit))



export default router