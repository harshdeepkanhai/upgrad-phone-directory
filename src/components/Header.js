import React from 'react';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand my-2">{props.title}</span>
    </nav>
  );
}

export default Header;
