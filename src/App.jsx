import { Routes, Route } from 'react-router-dom'
import './App.css'


// Pages
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/login'
import NotFound from './pages/NotFound'
import Signup from './pages/SignUp'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/SignUp" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
