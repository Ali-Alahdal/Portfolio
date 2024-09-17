import './style/Variables.css';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import AboutMe from './components/content/AboutMe';
import Education from './components/content/Education';
import Projects from './components/content/Projects';
import Experiences from './components/content/Experiences';
function App() {


  return (
    <>

      <BrowserRouter>
      <Header />
        <Routes>
        
          <Route index path='/' element={<AboutMe />} />
       
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
