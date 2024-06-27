import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <img src="/simple-logo-pretty-removebg-preview.png"></img>
      </NavLink>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose /> : <GiHamburgerMenu />}
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={toggleMenu}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" onClick={toggleMenu}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" onClick={toggleMenu}>
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/Products" onClick={toggleMenu}>
            PRODUCTS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
