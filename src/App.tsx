

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Blog from './components/Blog';

function AppRoutes() {
  const location = useLocation();
  const isBlog = location.pathname === '/blog';
  return (
    <>
      {!isBlog && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
