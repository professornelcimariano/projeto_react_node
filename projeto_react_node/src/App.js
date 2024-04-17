import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Login } from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
               <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </nav> */}
        <Routes>
          {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
