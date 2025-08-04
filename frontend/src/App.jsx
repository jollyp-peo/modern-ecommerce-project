import './App.css'
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Login from './components/login';
import LandingPage from './components/LandingPage';
import Login2 from './components/Login2';
import Register2 from './components/Register2';
import About2 from './components/About2';



function App() {
  

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path='/login' element={<Login2/>}/>
          <Route path='/landing-page' element={<LandingPage/>}/>
          <Route path='/register' element={<Register2/>}/>
          <Route path='/aboutv2' element={<About2/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
