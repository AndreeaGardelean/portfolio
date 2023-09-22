import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
  return (
    <div style={styles.page}>
      <Header />
      <body>
        <Home />
        <About />
        <Work />
        <Contact />
      </body>
      
    </div>
  );
}

const styles = {
  page: {
    margin: 20
  }
}

export default App;
