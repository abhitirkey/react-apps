import React, {useState} from 'react';
import './App.css';
import './css/pagination.css'

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import DashboardElements from './Components/DashboardElements/DashboardElements'
import SidebarContext from './Components/Contexts/SidebarContext'

function App() {

  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="App">
      <SidebarContext.Provider value = {[sidebar, setSidebar]}>
        <Sidebar />
        <div style={sidebar ? {marginLeft: '250px'}: {marginLeft: '0px'}} className="not-sidebar">
          <Header />
          <DashboardElements />
        </div>
      </SidebarContext.Provider>
    </div>
  );
}

export default App;
