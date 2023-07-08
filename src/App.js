import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./app.scss";
import { useState } from "react";
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function handelUser(user) {
    setCurrentUser(user);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              currentUser ? (
                <div className="app">
                  <Sidebar />
                  <Dashboard />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="login"
            element={
              currentUser ? (
                <Navigate to="/" />
              ) : (
                <Login handelUser={handelUser} />
              )
            }
          />
          <Route
            path="register"
            element={
              currentUser ? (
                <Navigate to="/" />
              ) : (
                <Register handelUser={handelUser} />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
