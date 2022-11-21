import Navbar from './components/navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import AllCourses from './components/pages/AllCourses.js';
import Admin from './components/pages/Admin.js';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allcourses' element={<AllCourses />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
