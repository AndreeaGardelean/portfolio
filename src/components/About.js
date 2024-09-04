import React from "react";
import '../css/about.css';
import MatrixRain from "./MatrixRain";

const About = () => {
  return (
    <div id="about">
      <MatrixRain />
      <article id="description">
        <p id="intro">More about me</p>
        <p>Computer Science Graduate from Royal Holloway, University of London. Graduated with first-class honours, with an interest in security, malware, and algorithms.
          <br></br><br></br> My experience as a teaching assistant for first-year undergraduate students has deepened my understanding of computer science concepts and strengthened my communication skills. </p>
        <p>During my journey, I have worked on various projects, both independently and collaboratively, handling full-stack development from front-end to back-end (always saw an opportunity to expand my knowledge and take on new challenges). With each line of code, project, and challenge, I've grown into a better Computer Scientist.
          <br></br><br></br>My role as a Software Engineer Intern has fueled my passion to excel in this field, drive impactful change, and make a positive difference in the world through technology.
        
          <br></br><br></br>
        Beyond the realm of coding, I enjoy spending my free time hiking, capturing photos, painting, or reading a good book.
          <br></br>
          You can see some of my work on <a href="https://www.flickr.com/photos/199793426@N05/with/53447112463">Flickr</a></p>
      </article>
    </div>
  );
};

export default About;
