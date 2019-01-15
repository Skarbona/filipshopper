import React from 'react';
import M from 'materialize-css'
import { Link } from 'react-router-dom';

import CartIcon from '../../components/Header/CartIcon'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.sideNav = React.createRef();
    }

    componentDidMount = () => {
        const { sideNav } = this;

        const elems = sideNav.current;
        M.Sidenav.init(elems);
    };

    render() {
        const { sideNav } = this;
        return (
            <React.Fragment>
                <div className="navbar-fixed">
                    <nav className="blue darken-1 animated slideInDown">
                        <div className="nav-wrapper container">
                            <Link to="/" className="brand-logo">
                                FilipS.opper
                            </Link>
                            <Link to="#" data-target="mobile-burger" className="sidenav-trigger"><i
                                className="material-icons">menu</i></Link>
                            <ul className="right hide-on-med-and-down">
                                <CartIcon />
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="mobile-burger" ref={sideNav}>
                    <CartIcon />
                </ul>
            </React.Fragment>
        );
    }

}

export default Header;
