import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../css/header.css'

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const [isDropdownMenuVisible, setIsDropdownMenuVisible] = React.useState(false);

  const handleDropdownMenu = () => {
    setIsDropdownMenuVisible(!isDropdownMenuVisible);
  }

  const handleScreenResizing = () => {
    setIsSmallScreen(window.innerWidth < 630);
    setIsDropdownMenuVisible(false);
    console.log('small screen : ', isSmallScreen)
  }

  useEffect(() => {
    handleScreenResizing();
    window.addEventListener('resize', handleScreenResizing);

    return () => {
      window.removeEventListener('resize', handleScreenResizing);
    }
  }, [])

  const redirect = (element) => {
    const targetElement = document.getElementById(element);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <div>
      <header className="header">
        <img src="/signature2.png" className="img"></img>
        { isSmallScreen ? (
        <div>
          <FontAwesomeIcon icon={faBars} onClick={handleDropdownMenu}/>
        </div>
        ) : (
        <ul className="list">
          <li className="listItem" onClick={() => redirect("about")} > About </li>
          <li className="listItem" onClick={() => redirect("skills")} > Skills </li>
          <li className="listItem" onClick={() => redirect("work")} > Projects </li>
          <li className="listItem" onClick={() => redirect("contact")} > Contact </li>
        </ul> 
        )}
      </header>
      { isDropdownMenuVisible ? ( 
        <ul className="dropdownList">
          <li> Home </li>
          <li> About </li>
          <li> Projects </li>
          <li> Contact </li>
        </ul> 
        ) : null }
    </div>
  );
};

export default Header;
