import React from "react";
import '../css/welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import redirect from "../shared/redirect";

const Welcome = () => {
return (
  <div className='intro' id="welcome">
    <article className="description">
      <p className="greeting">Hi, my name is</p>
      <p className="name">Andreea Gardelean</p>
      <p className="phrase">Computer Science student, Full Stack Developer & aspiring Software Engineer</p>
    </article>

    <article className="more" onClick={() => redirect("about")}>
      <p>Learn more about what I do</p>
      <FontAwesomeIcon icon={faAngleDown} id="icon"/>
    </article>
  </div>
    )
}

export default Welcome;