import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Order from "./pages/order";
import Signin from "./pages/signin";
import SigninSuccess from "./pages/confirm_account";
import OrderConfirmation from "./pages/confirm_order";
import Login from "./pages/login";
import AuthenticationService from "./services/AuthenticationService";
import Footer from "./components/footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    AuthenticationService.isAuthenticated()
  );

  return (
    <div className="App">
      <Header
        setIsAuthenticated={setIsAuthenticated}
        isAuthenticated={isAuthenticated}
      />
      <main>
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Order />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/success" element={<SigninSuccess />} />
            <Route path="/confirmation" element={<OrderConfirmation />} />
          </Routes>
        ) : (
          <Login setIsAuthenticated={setIsAuthenticated} />
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
