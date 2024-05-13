import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import TimeLine from './pages/TimeLine'
import Login from './pages/Login'
import { createClient } from '@supabase/supabase-js'
// import { Database } from './database.types'
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)
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
