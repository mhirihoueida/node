import React from 'react'
// Routes ça nous permet d'englober plusieurs routes ,et Route ça nous permet de dire  quel url précise.
import { Routes, Route }  from 'react-router-dom' 
// importer les données (qu'on a déja parti les chercher de notre base)
import Produits from '../components/Produits'
//importer produit 
import Produit from '../components/Produit'

const ProduitsPage = ()  => {
    return(
        <Routes>
            < Route path='/'  element={<Produits />}  />
            < Route path=':id'  element={<Produit />}  />


        </Routes>
    )
}



export default ProduitsPage 