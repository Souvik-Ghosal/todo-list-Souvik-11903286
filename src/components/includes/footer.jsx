import React from 'react';

import '../../styles/footer.css';

const UserGH = () => {
  return (
    <span>
      <a href="https://github.com/Souvik-Ghosal">Souvik Ghosal</a>
    </span>
  );
};

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <span>
        &#169; {new Date().getFullYear()} <UserGH />
      </span>
    </div>
  </div>
);

export default Footer;
