import React from 'react'
import { Card, Badge } from 'antd'
const { Meta } = Card

const ProduitCard = ({ produit }) => {
  return (
    <div style={{ width: 300, margin: '1rem' }}>
      <Badge count='PROMO'>
        <Card
          cover={
            <img
              style={{
                width: '300px',
                height: '350px',
                objectFit: 'cover',
                
                
              }}
              alt={produit.name}
              src={`https://source.unsplash.com/random/${Math.ceil(
                Math.random() * 1000 + 300
              )}x350/?iphone `}
            />
          }
        >
          <Meta
            title={produit.name}
            description={`le stock contient: ${produit.stock} `}   
            
          />
        </Card>
      </Badge>
    </div>
    
  )
}

export default ProduitCard
