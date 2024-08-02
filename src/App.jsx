import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './view/header'
import Banner from './view/home/banner'
import Main from './view/home/main'
import PreviewForm from './view/home/PreviewForm'
import Footer from './view/footer'
import Info from'./view/info/info'
import Shop from'./view/shop/shop'
import Tos from './view/tos/tos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header /> 
    {/* <Banner /> */}
    {/* <Main />
    <PreviewForm/>     */}
    {/* <Info /> */}
    <Shop />
    <Tos />
    <Footer/>


    </>
  )
}

export default App
