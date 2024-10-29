import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutMePage from './pages/AboutMePage'
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CVPage from './pages/CVPage';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" />} />
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/AboutMePage" element={<AboutMePage/>} />
        <Route path="/ProjectsPage" element={<ProjectsPage/>} />
        <Route path="/CVPage" element={<CVPage/>} />
      </Routes>
    </Router>
  )
}

export default App
