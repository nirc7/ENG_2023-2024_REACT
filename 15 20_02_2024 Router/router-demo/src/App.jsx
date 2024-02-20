
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home';
import About from './Pages/About';
import MenuComponent from './Pages/MenuComponent'
import User from './Pages/User'

function App() {

  let user = 7;

  return (
    <>
      <>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to={"/menu/" + user}>Menu</Link>
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu/:userId" element={<MenuComponent />} />
        <Route path="/user" element={<User />} />
      </Routes>

      Footer

    </>
  )
}

export default App
