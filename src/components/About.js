import React from "react";
import '../css/about.css';
import MatrixRain from "./MatrixRain";

const About = () => {
  return (
    <div id="about">
      <MatrixRain />
      <article id="description">
        <p id="intro">More about me</p>
        <p>Computer Science Graduate from Royal Holloway, University of London with a special interest in security, malware, and algorithms.
          <br></br><br></br> My experience as a teaching assistant for first-year undergraduate students has enhanced my understanding and ability to convey complex concepts effectively. </p>
        <p>As a Full Stack developer, I've worked on various projects, both personal and collaborative, and my role as a Software Engineer Intern has fueled my aspiration to excel further in this field.
          <br></br><br></br>
          I thrive on challenging myself with puzzles and coding problems, constantly pushing my boundaries to enhance my skills. </p>
        <p>Beyond the realm of code, I find joy in the pages of a good book, the beauty of a hike, the lens of a camera capturing moments, and the strokes of a paintbrush creating art. </p>
      </article>
    </div>
  );
};

export default About;
