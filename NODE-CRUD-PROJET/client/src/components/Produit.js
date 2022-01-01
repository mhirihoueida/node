import React , {useState, useEffect } from 'react'
import { useParams } from 'react-router'


import ProduitCard from './ProduitCard'
import ProduitForm from './ProduitForm'


const Produit = () => {
  const {id} = useParams()
  const [produit, setProduit] = useState(null)
  //console.log (produit)
 
  

  useEffect(() => {
    const fetchData = async () => {
      const data = await window.fetch(`/api/produits/${id}`)
      const json = await data.json()
       //console.log(json)
      setProduit(json)
    }

    fetchData()
  }, [id])

  

  return produit?(
    <div>
       
                  
      <ProduitCard  produit = {produit}/>
      <h2> EDITER</h2>
      <ProduitForm id={id} produit={produit} setProduit={setProduit} />
                      
                  
             
                
      
     
        

    </div>
  ) : null
}

export default Produit
