import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';
const Index = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return (
     <div className="min-h-screen bg-gradient-to-br from-bg to-bg-dark">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <Header onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
         <Outlet />
      </div>
    </div>
  )
}

export default Index