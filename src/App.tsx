import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Users from './pages/Users'

function App() {


  return (
    <div>
      <Routes >
        <Route element={<Layout />} >
          <Route path='/home' element={<Home />} />
          <Route path='/users' element={<Users />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
