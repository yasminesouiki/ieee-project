import React from 'react';
import './Navbar.css';

const pages = ['IEEE.org', 'IEEE Xplore Digital library', 'IEEE standards', 'IEEE spectrum', 'More sites'];

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        {pages.map((page, index) => (
          <div className="nav-item" key={index}>
            <a href="#" className="nav-link">
              {page.includes('Xplore') ? (
                <>
                  IEEE <em>Xplore</em> Digital Library
                </>
              ) : (
                page
              )}
            </a>
            {index !== pages.length - 1 && <span className="divider">|</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar