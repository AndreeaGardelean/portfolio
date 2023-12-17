import React, {useState} from "react";
import '../css/headerSmall.css';
import redirect from "../shared/redirect";

const HeaderSmall = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const displayMenu = () => {
    setVisibleMenu(!visibleMenu);
    document.getElementById('menu').classList.toggle('change');
  };

  const handleClick = (page) => {
    redirect(page);
    if (page === 'welcome') {
      setVisibleMenu(false);
    } else {
      displayMenu();
    }
  }

  return (
    <div>
      <header className="header-small">
        <div className="header-items">
          <div id="logo" onClick={() => redirect('welcome')}>AG</div>
          <div className="menu-icon" id="menu" onClick={() => displayMenu()}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
          </div>
        </div>
        {visibleMenu? (
        <div id="dropdown-container">
          <ul className="dropdownList">
            <li className="listItemSmall" onClick={() => handleClick("about")} > About </li>
            <li className="listItemSmall" onClick={() => handleClick("skills")} > Skills </li>
            <li className="listItemSmall" onClick={() => handleClick("work")} > Projects </li>
            <li className="listItemSmall" onClick={() => handleClick("contact")} > Contact </li>
          </ul> 
        </div>
        ) : (null)}
      </header>
    </div>
      
  )
}

  export default HeaderSmall;