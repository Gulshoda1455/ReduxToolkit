
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './assets/components/Categories'
import Counter from './assets/components/Counter'
import Products from './assets/components/Products'


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Counter/>}/>
          <Route path='/category' element={<Categories/>}/>
          <Route path='/products' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
     
     
    </>
  )
}

export default App
