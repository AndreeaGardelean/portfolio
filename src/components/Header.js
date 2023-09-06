import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Andreea Gardelean</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}> Home </li>
        <li> About </li>
        <li> Projects </li>
        <li> Contact </li>
      </ul>
    </header>
  );
};

const styles = {
  list: {},
  listItem: {},
};

export default Header;
