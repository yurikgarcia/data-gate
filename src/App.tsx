import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Appbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Users from './pages/Users'

// #28282a

function App() {

  return (
    <div>
      
      <Routes >
        <Route path='/login' element={<Login />} />
          <Route element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
