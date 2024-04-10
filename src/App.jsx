import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/Index'
import Search from './pages/search/Search'
import PostCodeFalse from './pages/search/postcodeFalse'
import Submited from './pages/search/Submited'
import PostCodeTrue from './pages/search/postcodeTrue'
import Login from './pages/login/Login'
import Layout from './pages/dashboard/Layout'
import MySide from './pages/dashboard/myside/MySide'
import ManageStaff from './pages/dashboard/manageStaff/ManageStaff'
import Products from './pages/dashboard/products/Products'
import Orders from './pages/dashboard/orders/Orders'
import Setting from './pages/dashboard/setting/Setting'
import Cart from './pages/dashboard/myside/Cart'
import Checkout from './pages/dashboard/myside/Checkout'
import OrderComplete from './pages/dashboard/myside/OrderComplete'

function App() {

  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/:postcode/not-available' element={<PostCodeFalse />} />
        <Route path='/search/:postcode/available' element={<PostCodeTrue />} />
        <Route path='/search/:postcode/submited' element={<Submited />} />
        <Route element={<Layout/>}>
          <Route path='/dashboard/myside' element={<MySide/>}/>
          <Route path='/dashboard/myside/cart' element={<Cart/>}/>
          <Route path='/dashboard/myside/checkout' element={<Checkout/>}/>
          <Route path='/dashboard/myside/complete' element={<OrderComplete/>}/>
          <Route path='/dashboard/manage-staff' element={<ManageStaff/>}/>
          <Route path='/dashboard/products' element={<Products/>}/>
          <Route path='/dashboard/orders' element={<Orders/>}/>
          <Route path='/dashboard/setting' element={<Setting/>}/>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
