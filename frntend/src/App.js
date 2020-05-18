import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './component/header'
import Footer from './component/footer'
import Welcome from './component/welcome'
import Body from './component/body';
import StuLoginLogout from './component/stuLoginLogout'
import Login from './component/login'
import Studentregister from './component/studentregister'
import Teacherregister from './component/teacherregister'



function App() {
  return (
    <div className="App">
     
     <Router>
              <Route path="/"  exact component= { Header}/>
              <Route path="/"  exact component= { Welcome}/>
              <Route path="/"  exact component= { StuLoginLogout}/>
              <Route path="/"  exact component= { Body}/>
              <Route path="/"  exact component= { Footer}/>

            <Route path="/login" exact component={Login}/>

            <Route path="/studentregister" exact component={Studentregister}/>
            <Route path="/teacherregister" exact component={Teacherregister}/>
    </Router>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
