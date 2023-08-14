import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home"
import FollowPeople from "./components/FollowPeople/FollowPeople"

function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path="register" element={<Register/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path="follow-people" element={<FollowPeople/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
