// importer le modele de notre produit 

import ProduitModel from '../models/produitModel.js'




export const getTest = (_,res) =>{
    res.send({ name:'Ecommerce'})
}



export const postTest = (req,res) => { 
    res.send(req.body)
}

// la fonction pour ajouter un produit 
export const addProduit = async(req,res) =>{
    const produit = new ProduitModel(req.body)
/* helpers.js pour remplacer le try /catch par par la fonction globale catchErrors 


    try{
        //mongoose gére la sevgarde dans la base de données 
        await produit.save()
        //voir ce que mongoose a envoyé 
        res.send (produit )
    }catch(err) {
        //si jamais ça marche pas , ça nous envoie err
        res.status(500).send(err)



    }*/
}
//la fonction pour lire toutes les produits 

export const getProduits = async(req,res) => {
    const produits = await ProduitModel.find({})
    res.send(produits)

}
    //la fonction pour lire toutes les produits qui appartiennent à la meme categories (jeu dans ce cas);

export const getCategory = async(req,res) => {
    const produits = await ProduitModel.find({category:'jeu'})
    res.send(produits)

}
    //la fonction pour lire toutes les produits qui ont un stock  egale à 5. 

export const getStock= async(req,res) => {
    const produits = await ProduitModel.find({stock:5})
    res.send(produits)

}

//la fonction pour lire un produit 

export const getProduit = async (req,res)=>{
    console.log(req.params.id)
    const produit = await ProduitModel.find({_id : req.params.id})
    res.send(produit)

}

//la fonction qui permet de modifier un produit (de patcher)

export const updateProduit = async (req,res)=>{
    const produit = await ProduitModel.findByIdAndUpdate(req.params.id, req.body)
    await produit.save()
    res.send(produit)

}

//la fonction qui permet de supprimer un produit 

export const deleteProduit = async (req,res)=>{
    const produit = await ProduitModel.findByIdAndDelete(req.params.id)

    if(!produit){
        res.status(404).send('Aucun produit trouvée.')
    }
    res.status(200).send()
}


