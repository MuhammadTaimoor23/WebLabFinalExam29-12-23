import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './component/Category';
import Groups from './component/Groups';

import NavbarMenu from './component/NavbarMenu';


function App() {
  return (
    <Router>
      <div>
        <NavbarMenu/>
        <Routes>
          
          <Route path="/Category" element={<Category />} />
          <Route path="/Group" element={<Groups/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
