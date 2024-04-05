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

function App() {

  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search/:postcode/' element={<Search />} />
        <Route path='/search/:postcode/not-available' element={<PostCodeFalse />} />
        <Route path='/search/:postcode/available' element={<PostCodeTrue />} />
        <Route path='/search/:postcode/submited' element={<Submited />} />
        <Route element={<Layout/>}>
          <Route path='/dashboard/myside' element={<MySide/>}/>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
