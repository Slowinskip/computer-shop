import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer/Footer'
import Home from './components/layout/Home/Home'
import NavBar from './components/layout/Navbar/Navbar'
import TopBar from './components/layout/TopBar/TopBar'

function App() {
  return (
    <main>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
