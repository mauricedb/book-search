import React from 'react';

const Navbar: React.FC = () => (
  <nav className="navbar navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      Book Search
    </a>
  </nav>
);

Navbar.displayName = 'Navbar';

export default Navbar;
