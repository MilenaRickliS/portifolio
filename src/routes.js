import { Routes, Route } from 'react-router-dom'
import Portifolio from './pages/Portifolio'
import Curriculo from './pages/Curriculo'

function RoutesApp(){
    return(
      <Routes>
        <Route path="/" element={<Portifolio/>}/>
  
        <Route path="/curriculo" element={ <Curriculo/> } />
      
      </Routes>
    )
  }
  
  export default RoutesApp;