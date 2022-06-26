import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/header.css';

const Header = () => (
  <div className="App-header container-full">
    <h1 className="App-title">Todo App</h1>

    <div className="center-text routes">
      <NavLink to="/" activeClassName="active" exact={true}></NavLink>
    </div>
  </div>
);

export default Header;
