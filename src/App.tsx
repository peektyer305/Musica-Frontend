import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import TimeLine from './pages/TimeLine'
import Login from './pages/Login'

function App() {
 

  return (
    <Router>
    <Header/>
      <p className="text-black">
        Click on the Vite and React logos to learn more
      </p>
      <Routes>
          <Route path="/TimeLine" element={<TimeLine/>} />
          <Route path="/auth/login" element={<Login/>} />
        </Routes>
    </Router>
  )
}

export default App
