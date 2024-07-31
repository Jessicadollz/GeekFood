import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home.jsx'
import Quote from './Components/Quote/Quote.jsx'
import Restaurant from './Components/Restaurants/Restaurant.jsx'
import Food from './Components/Foods/Foods.jsx'
import Contact from './Components/Contact/Contact.jsx'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/quote' element={<Quote />} />
          <Route path='/restaurant' element={<Restaurant />}/>
          <Route path='/foods' element={<Food />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
