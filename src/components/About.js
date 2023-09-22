import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <img src="/portrait.jpeg" style={styles.image} alt="Portrait" />
      <p style={styles.text}>About me</p>
    </div>
  );
};

const styles = {
  image: {
    width: "30%",
    height: 'auto',
  },
  container: {
    display: "flex",
    alignItems: "center", 
    marginTop: 20
  },
  text: {
    marginLeft: 10
  }
};

export default About;
