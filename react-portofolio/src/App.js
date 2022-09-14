import React from "react";
// Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
// Global Styles
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
