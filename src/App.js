import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer/Footer'
import Home from './components/layout/Home/Home'
import NavBar from './components/layout/Navbar/Navbar'
import TopBar from './components/layout/TopBar/TopBar'
import ProductPage from './components/views/ProductPage/ProductPage'
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
      </Routes>
      <Footer />
    </main>
  )
}

export default App
