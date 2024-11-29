import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
          <Routes>
            <Route path='/'exact component= {Home} />
          </Routes> 
         </Router>
    

    </div>
  );
}

export default App;
