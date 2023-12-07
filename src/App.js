import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Welcome from "./components/Welcome";
import './css/page.css';

function App() {
  return (
    <div style={styles.page}>
      <Header />
      <Welcome />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

const styles = {
  page: {
    margin: 0,
    width: '100%'
  }
}

export default App;
