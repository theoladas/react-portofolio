import React from "react";
// Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
// Global Styles
import GlobalStyle from "./components/GlobalStyle";
// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />}></Route>
        <Route path="/work" exact element={<OurWork />}></Route>
        <Route path="/contact" exact element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
