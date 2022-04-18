import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import AllNotes from './pages/AllNotes'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  const [ isAuth, setIsAuth ] = useState()
  const [ allNotes, setAllNotes ] = useState([])

  return (
   
    <Router>
    <div className="App">
  <Nav isAuth={isAuth} setIsAuth={setIsAuth} /> 
    </div>
    <Routes>
    {!isAuth ? <Route exact path='/' element={<Home />}/> : 
      <Route exact path='/notes' element={<AllNotes allNotes={allNotes} setAllNotes={setAllNotes} isAuth={isAuth} />}/>
      }
    <Route path='/about' element={<About />}/>
    </Routes>
    </Router>
  );
}

export default App;
