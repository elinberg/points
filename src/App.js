import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Points from "./components/points.component"
import {  Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        
        <Link to="/points" className="nav-link menu-item">Points</Link>
        <Points />
      </header>
    </div>
    
    </Router>

  );
}

export default App;
