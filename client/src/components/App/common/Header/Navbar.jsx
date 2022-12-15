import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            <span className="fa-solid fa-border-all" />
            <h4>
              Categories <i className="fa fa-chevron-down" />
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? 'nav-links-MobileMenu' : 'link f_flex capitalize'
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/user">account</Link>
              </li>
              <li>
                <Link to="/track">track my order</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn" />
              ) : (
                <i className="fas fa-bars open" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
