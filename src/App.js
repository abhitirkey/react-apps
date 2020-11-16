import React, {useState} from 'react';
import './App.scss';
import './css/pagination.css'

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import DashboardElements from './Components/DashboardElements/DashboardElements'
import SidebarContext from './Components/Contexts/SidebarContext'
import FacebookLoginContext from './Components/Contexts/FacebookLoginContext'
// import Login from './Components/Login/Login'

function App() {

  const [sidebar, setSidebar] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  // let pageContent = <Login />;

  // if(loginStatus){
    let pageContent = (<SidebarContext.Provider value = {[sidebar, setSidebar]}>
      <Sidebar />
      <div style={sidebar ? {marginLeft: '250px'}: {marginLeft: '0px'}} className="not-sidebar">
        <Header />
        <DashboardElements />
      </div>
    </SidebarContext.Provider>);
  // }

  return (
    <div className="App">
      <FacebookLoginContext.Provider value={[loginStatus, setLoginStatus]}>
          {pageContent}
      </FacebookLoginContext.Provider>  
    </div>
  );
}

export default App;
