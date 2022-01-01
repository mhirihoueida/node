import Layout from './components/Layout'
import React from 'react'
// Routes ça nous permet d'englober plusieurs routes ,et Route ça nous permet de dire  quel url précise.
import { Routes, Route }  from 'react-router-dom' 
//importer nos pages 
import HomePage from './pages/HomePage'
import ProduitsPage from './pages/ProduitsPage'


const App =  () => {
  return (
    <Layout>
        <Routes>
          <Route path='/' element={< HomePage />}/>
          <Route path='produits/*' element={<ProduitsPage/>}/>
          <Route path='about' element={<h1>A propos</h1>}/>
          <Route path='contact' element={<h1>Contact</h1>}/>
          <Route path='*' element={<h1>Not found 404</h1>}/>
        </Routes>
        

    
    </Layout>
  );
}

export default App;
