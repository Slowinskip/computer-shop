import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer/Footer'
import Home from './components/layout/Home/Home'
import NavBar from './components/layout/Navbar/Navbar'
import TopBar from './components/layout/TopBar/TopBar'
import Cart from './components/views/cart/Cart'
import Login from './components/views/Login/Login'
import Logout from './components/views/Logout/Logout'
import ProductPage from './components/views/ProductPage/ProductPage'
import Register from './components/views/Register/Register'
import { addCart } from './redux/cartRedux'

function App() {
  const [cartData, setcartData] = useState(
    JSON.parse(localStorage.getItem('cart')) || [],
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (cartData.length > 0) {
      cartData.map((i) => {
        dispatch(addCart(i))
      })
    }
  }, [cartData])
  return (
    <main>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
