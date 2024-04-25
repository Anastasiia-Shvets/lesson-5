import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from './pages/about/About'
import ContactUs from './pages/contact-us/ContactUs'
import Home from './pages/home/Home'
import NotFound from './pages/not-found/NotFound'

// http://localhost:5173/




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact-us'>Contact us</NavLink>
        </nav> 

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>

    </>
  )
}

export default App
