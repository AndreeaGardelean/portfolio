import React from "react";
import '../css/about.css';

const About = () => {
  return (
    <div id="about">
      <img src="/about-background2.png" id="image"></img>
      <article id="description">
        <p id="intro">More about me</p>
        <p>I am a passionate and ambitious 3rd-year Computer Science student with a keen interest in algorithms, complexity, and security.
        <br></br> As a Teaching Assistant for 1st-year students, I find joy in sharing knowledge and helping others embark on their coding journey. </p>
        <p>My journey as a Full Stack Developer has fueled my true aspiration to become a Software Engineer, and I'm excited about the journey ahead. 
        Constantly seeking to expand my skills, I enjoy challenging myself with programming problems and puzzles that push my boundaries. </p>
        <p>Beyond the realm of code, I find joy in the pages of a good book, the beauty of a hike, the lens of a camera capturing moments, and the 
        strokes of a paintbrush creating art. </p>
        <p>Join me as I continue to grow, learn, and contribute to the ever-evolving world of software development!</p>
      </article>
    </div>
  );
};

export default About;
