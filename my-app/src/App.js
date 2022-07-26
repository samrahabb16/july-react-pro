import React from "react";
import Header from "./header/header";
import Body from "./body/body";
import Footer from "./footer/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";



function App() {
  return (
     
    <Router>
    
     <Route path="/" component ={Header}/>
   
     </Router>
  )
  }
   export default App;
  