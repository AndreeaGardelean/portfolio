import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../css/header.css';
import redirect from "../shared/redirect";

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

  return (
    <div>
      <header className="header">
        {/* <p id="logo">AG</p> */}
        <img src="/signature2.png" className="img" onClick={() => redirect("welcome")}></img>
        { isSmallScreen ? (
        <div>
          <FontAwesomeIcon icon={faBars} onClick={handleDropdownMenu}/>
        </div>
        ) : (
        <ul className="list">
          <li className="listItem" onClick={() => redirect("about")} > // about </li>
          <li className="listItem" onClick={() => redirect("skills")} > // skills </li>
          <li className="listItem" onClick={() => redirect("work")} > // projects </li>
          <li className="listItem" onClick={() => redirect("contact")} > // contact </li>
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
