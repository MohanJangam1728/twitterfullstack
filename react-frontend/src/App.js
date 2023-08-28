import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import Login from "./components/Login/Login";
// const Home = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(import('./components/Home/Home')); // Replace with the actual path to your LazyComponent
//     }, 500); // 4000 milliseconds (4 seconds)
//   });
// });
const Register = React.lazy(() => import("./components/Register/Register"));
const Home = React.lazy(() => import("./components/Home/Home"));
const FollowPeople = React.lazy(() =>import("./components/FollowPeople/FollowPeople"));
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="register"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Register />
              </Suspense>
            }
          ></Route>

          <Route path="login" element={<Login />}></Route>

          <Route
            path="home"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          ></Route>

          <Route
            path="follow-people"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <FollowPeople />
              </Suspense>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
