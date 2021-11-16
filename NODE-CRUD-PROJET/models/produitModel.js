import mongoose from 'mongoose'


//shéma 
const ProduitSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,// il faut absolement un nom si non ça marche pas 
        trime: true,// supprimer les espaces à la fin 
        lowercase:true// toutes les données que j 'ai récupere seront en miniscule et toute les données que j'envoie seront également en miniscule .
    },

    category:{
        type:String,
        required: true,
        trime: true,
        lowercase:true

    },

    stock:{
        type:Number,
        default: 0,
        validate:value =>{
            if(value =0) {
                throw new Error(
                    'le stock est vide. pensez à l approvisionnez svp .'
                )
            } 
        }

    }

})

// le modele(un model utilise un shéma)
const Produit = mongoose.model('Produit',ProduitSchema)

// exporter notre modele 
export default Produit
