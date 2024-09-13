import './style/Variables.css';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import AboutMe from './components/content/AboutMe';
import Education from './components/content/Education';
import Projects from './components/content/Projects';
function App() {


  return (
    <>

      <BrowserRouter>
      <Header />
        <Routes>
        
          <Route index path='/' element={<AboutMe />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experiences' element={<div>Experiences</div>} />
          <Route path='/contact-me' element={<div>Contact Me</div>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
