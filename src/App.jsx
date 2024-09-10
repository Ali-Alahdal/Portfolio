import './style/Variables.css';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import AboutMe from './components/content/AboutMe';
function App() {


  return (
    <>

      <BrowserRouter>
      <Header />
        <Routes>
        
          <Route path='/' element={<AboutMe />} />
          <Route path='/education' element={<div>Education</div>} />
          <Route path='/projects' element={<div>Projects</div>} />
          <Route path='/experiences' element={<div>Experiences</div>} />
          <Route path='/contact-me' element={<div>Contact Me</div>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
