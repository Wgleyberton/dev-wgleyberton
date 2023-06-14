import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import App from './App.js'
import Home from './pages/Home.js'
import Skills from './pages/Skills.js'
import Sobre from './pages/Sobre.js'
import Contato from './pages/Contato.js'
import Portfolio from './pages/Portfolio.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contato" element={<Contato />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
