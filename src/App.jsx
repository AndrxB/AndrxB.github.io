import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage';




function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/HomePage" />} />
      <Route path="/HomePage" element={<HomePage/>} />
      <Route path="/AboutPage" element={<AboutPage/>} />
      </Routes>
    </Router>
  )
}

export default App
