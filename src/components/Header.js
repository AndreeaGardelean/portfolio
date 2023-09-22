import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const [isDropdownMenuVisible, setIsDropdownMenuVisible] = React.useState(false);

  const handleDropdownMenu = () => {
    setIsDropdownMenuVisible(!isDropdownMenuVisible);
  }

  const handleScreenResizing = () => {
    setIsSmallScreen(window.innerWidth < 580);
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
    <div style={ styles.font}>
      <header style={styles.header}>
        <h style={styles.name}>Andreea Gardelean</h>
        { isSmallScreen ? (
        <div>
          <FontAwesomeIcon icon={faBars} onClick={handleDropdownMenu}/>
        </div>
        ) : (
        <ul style={styles.list}>
          <li style={styles.listItem}> Home </li>
          <li style={styles.listItem}> About </li>
          <li style={styles.listItem}> Projects </li>
          <li style={styles.listItem}> Contact </li>
        </ul> 
        )}
      </header>
      { isDropdownMenuVisible ? ( 
        <ul style={styles.dropdownList}>
          <li> Home </li>
          <li> About </li>
          <li> Projects </li>
          <li> Contact </li>
        </ul> 
        ) : null }
    </div>
  );
};

const styles = {
  font: {
    fontFamily: "Times New Roman",
    fontSize: 20
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    flex: 1,
    fontSize: '2rem',
  },
  list: {
    flex: 1,
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    gap: 30
  },
  listItem: {
    display: 'inline',
  },
  dropdownList: {
    listStyle: 'none',
    position: 'absolute',
    right: 10,
    alignItems: 'center'
  }
};

export default Header;
