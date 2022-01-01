import React from 'react'
//dans antd on trouve les Layout(modéle d'une page), ici on va crée notre propre Layout "PRDLayout"qu' on va l'utilisé dans App.js
import { Layout, Menu } from 'antd'
//importer le module qui nous permettera de faire les liens 
import { Link } from 'react-router-dom'
import MenuItem from 'antd/lib/menu/MenuItem'





//ici on import la tete, le contenu et le pied de ce meme Layout existant dans antd
const {Header, Content, Footer } = Layout 


// const de style 
const contentStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '3rem 3rem',
    justifyContent: 'center'
  }


const PRDLayout = ({ children }) =>{
    return  (
        <Layout>
         <Header >
             <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
              <MenuItem Key='1'>
                  <Link to='/'>Accueil</Link>
              </MenuItem> 

              <MenuItem Key='2'>
                  <Link to='/produits'>Produits</Link>
              </MenuItem> 

              <MenuItem Key='3'>
                  <Link to='/about'>A propos</Link>
              </MenuItem> 

              <MenuItem Key='4'>
                  <Link to='/contact'>Contact</Link>
              </MenuItem> 


             </Menu>
         </Header>

         <Content style={contentStyle} children={children} />


         <Footer style={{ textAlign: 'center'}}>
             MhiriShop 2021 créé par Mhiri houeida
         </Footer>    


        </Layout>
    )
}

export default PRDLayout