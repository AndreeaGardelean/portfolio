import React, { Fragment } from "react";
import { Timeline, Event } from "react-timeline-scribble";
import "../css/about.css";
import ActivityItem from "./ActivityItem";

const About = () => {
  return (
    <div id="about">
      <ul>
        <ActivityItem
          activityPeriod={"Jan 2025 - Present"}
          activityTitle={"Software Engineer"}
          activityLocation={"Thought Machine, London"}
          activityDescription={
            "Started my career journey as a Software Engineer."
          }
        />

        <ActivityItem
          activityPeriod={"Jul 2024"}
          activityTitle={"BSc Computer Science Graduation"}
          activityLocation={"Royal Holloway, University of London"}
          activityDescription={
            "Graduated with first-class honours, majoring in Computer Science."
          }
        />

        <ActivityItem
          activityPeriod={"Sep - Dec 2023"}
          activityTitle={"Teaching Assistant"}
          activityLocation={"Royal Holloway, University of London"}
          activityDescription={`Assisted first-year Computer Science students in labs by clarifying concepts, answering questions, and evaluating weekly checkpoints to assess their understanding.`}
        />

        <ActivityItem
          activityPeriod={"Jul - Sep 2023"}
          activityTitle={"Software Engineer Intern"}
          activityLocation={"Publicis Sapient, London"}
          activityDescription={
            "Developed a prototype blockchain-based loyalty application using agile methodology. Contributed to all stages of development, from concept to delivery, ensuring a bug-free implementation. Designed RESTful APIs in Java Spring Boot with the MVC pattern and built front-end features in React Native and CSS. Created a recommendations algorithm based on user behavior and preferences."
          }
        />

        <ActivityItem
          activityPeriod={"Sep 2020 - Jul 2024"}
          activityTitle={"BSc Computer Science student"}
          activityLocation={"Royal Holloway, University of London"}
          activityDescription={
            "Completed a hands-on Software Engineering course emphasizing TDD, design patterns, coding best practices and Git version control. Gained extensive knowledge in relational database design and Entity-Relationship diagrams, applying these skills in academic projects. Built a strong foundation in algorithms and computational complexity, and developed a keen interest in computer and network security, exploring malware analysis and system vulnerabilities."
          }
        />
      </ul>
    </div>
  );
};

export default About;
