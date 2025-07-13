import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar  onMenuClick={() => setSidebarOpen(true)}/>
      <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

    </BrowserRouter>
  );
}

export default App;
