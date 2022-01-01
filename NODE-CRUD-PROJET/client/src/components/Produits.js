// useState pour la mise à jour de nos données (creer un state , ou metrre toutes nos produits )
// useEffect qui nous permet de chercher nos données de notre base de données 
import React , {useState, useEffect} from 'react'
import ProduitCard from './ProduitCard'
import { Link } from 'react-router-dom'




// notre state on l'a appelé  Produits, (produits ce sont mes données et setProduits est notre fonction qui permet de mettre à jour nos données )
const Produits = () => {
    const[produits, setProduits] = useState([])

    // useEffect , pour chercher nos données (qui va étre utiliser au moment ou je lance la compenents )
    //(notre  premier parametre est une fonction , notre deuxiéme parametre est un tableau vide pour dire que çe se lance uniquement quand le components est monté puis ça se met plus à jour  )
    //await est placé devant la fonction asynchrone basée sur une promesse pour mettre en pause notre code sur cette ligne jusqu'à ce que la promesse se réalise ,puis retourner la valeur résultante .

    useEffect(()  => {
        const fetchData = async () => {
            const data = await window.fetch('/api/produits')
            const json = await data.json()
            console.log(json)
            setProduits(json)

        }

        fetchData()
    }, [] )

    return(
        <>
              {produits.map(produit => (
                  <Link key={produit._id} to={produit._id}>
                      <ProduitCard  produit={produit} />
                  </Link>
              ))}
        </>
    )
}


export default Produits
