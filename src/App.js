import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './comon/components/Loyout/Loyuot'
import AboutUs from './pages/AboutUs/AboutUs'
import Basket from './pages/Basket/Basket'
import Cotalog from './pages/Cotalog/components/Cotalog'
import DeliveryInfo from './pages/DeliveryInfo/DeliveryInfo'
import HomePage from './pages/HomePage/HomePage'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage'
import Registation from './pages/Registation'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage to='/' />} />

        <Route path='/cotalog' element={<Cotalog />}>
          <Route path=':category' element={<ProductPage />} />
        </Route>

        <Route path='/regisrt' element={<Registation />} />
        <Route path='/login' element={<Login />} />

        <Route path='/about' element={<AboutUs />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/info' element={<DeliveryInfo />} />
      </Route>
    </Routes>
  )
}

export default App
