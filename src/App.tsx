import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import TimeLine from './pages/TimeLine'
import Login from './pages/Login'
import { createClient } from '@supabase/supabase-js'
// import { Database } from './database.types'
export const supabase = createClient(
  "https://zbnfauumpjedhfgyxutu.supabase.co",
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpibmZhdXVtcGplZGhmZ3l4dXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzODUwNzYsImV4cCI6MjAyOTk2MTA3Nn0.ufrpaFxvb4kDXXZRrTaiD9_j2JyW0l5CTRxrNl3f8qE"
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
