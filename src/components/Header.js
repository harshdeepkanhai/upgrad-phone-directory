import React from 'react';

const Header = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <span class="navbar-brand my-2">{props.title}</span>
    </nav>
  );
}

export default Header;
