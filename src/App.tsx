import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import TimeLine from './pages/TimeLine'
import Login from './pages/Login'

function App() {
 

  return (
    <Router>
    <Header/>
      <Routes>
          <Route path="/TimeLine" element={<TimeLine/>} />
          <Route path="/auth/login" element={<Login/>} />
        </Routes>
    </Router>
  )
}

export default App
