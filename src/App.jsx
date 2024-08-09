import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './view/header'
import Main from './view/home/main'
import Footer from './view/footer'
import Info from './view/info/info'
import Shop from './view/shop/shop'
import Tos from './view/tos/tos'
import Capi from './view/weatherchart/CallApiWeather'
import Capidaily from './view/weatherdaily/CallApiWeatherDaily'
import Near from './view/weathernear/weathernear'
function App() {
  return (


   <Router>
     <Header />
     <Routes>
     <Route path="/" element={<Main />} />
     <Route path="/info" element={<Info />} />
     <Route path="/shop" element={<Shop />} />
      <Route path="/tos" element={<Tos />} />
      <Route path="/capi" element={
          <> <main>
          <div className="proa" >
          <div className="boxx" >
       <div className="nearhome">{<Near/>} </div>
       
            <div className="box"><Capi /> <Capidaily /></div> 
      </div>
         </div></main>
         </>
        } />
      
     </Routes>
     <Footer />
   </Router>
  )
}

export default App
