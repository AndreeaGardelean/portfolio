import React from "react";
import '../css/header.css';
import redirect from "../shared/redirect";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div id="logo" onClick={() => redirect('welcome')}>AG</div>
        <ul className="list">
          <li className="listItem" onClick={() => redirect("about")} > // about </li>
          <li className="listItem" onClick={() => redirect("skills")} > // skills </li>
          <li className="listItem" onClick={() => redirect("work")} > // projects </li>
          <li className="listItem" onClick={() => redirect("contact")} > // contact </li>
        </ul> 
      </header>
    </div>
  );
};

export default Header;
