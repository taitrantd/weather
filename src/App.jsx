import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './view/header'
import Banner from './view/home/banner'
import Main from './view/home/main'
import PreviewForm from './view/home/PreviewForm'
import Footer from './view/footer'
import Info from './view/info/info'
import Shop from './view/shop/shop'
import Tos from './view/tos/tos'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/tos" element={<Tos />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
