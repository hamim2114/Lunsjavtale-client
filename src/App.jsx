import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/Index'
import Search from './pages/search/Search'
import PostCodeFalse from './pages/search/postcodeFalse'
import Submited from './pages/search/Submited'
import PostCodeTrue from './pages/search/postcodeTrue'

function App() {

  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:postcode/' element={<Search />} />
        <Route path='/search/:postcode/false' element={<PostCodeFalse />} />
        <Route path='/search/:postcode/true' element={<PostCodeTrue />} />
        <Route path='/search/:postcode/submited' element={<Submited />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
