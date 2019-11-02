import React, { useEffect, useRef } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

import CartIcon from "./CartIcon/index";

const Header: React.FC<{}> = () => {
  const sideNav = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const elems = sideNav.current;
    if (elems) M.Sidenav.init(elems);
  }, []);

  return (
    <React.Fragment>
      <div className="navbar-fixed">
        <nav className="blue darken-1 animated slideInDown">
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              FilipS.opper
            </Link>
            <Link
              to="#"
              data-target="mobile-burger"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
              <CartIcon/>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-burger" ref={sideNav}>
        <CartIcon/>
      </ul>
    </React.Fragment>
  );
};

export default Header;
