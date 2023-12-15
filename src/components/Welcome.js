import React from "react";
import '../css/welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import redirect from "../shared/redirect";

const Welcome = () => {
return (
  <div className='intro' id="welcome">
    <div className="description">
      <p className="greeting">Hi, my name is</p>
      <p className="name">Andreea Gardelean</p>
      <p className="phrase">Computer Science student, Full Stack Developer & aspiring Software Engineer</p>
    </div>

    <div className="more" onClick={() => redirect("about")}>
      <p>Learn more about what I do</p>
      <FontAwesomeIcon icon={faAngleDown} id="icon"/>
    </div>
  </div>
    )
}

export default Welcome;