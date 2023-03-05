import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer/Footer'
import Home from './components/layout/Home/Home'
import Navbar from './components/layout/Navbar/Navbar'

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
