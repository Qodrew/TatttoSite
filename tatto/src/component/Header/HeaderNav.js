import { Link } from "react-router-dom";

import "./HeaderNav.scss";
import Mainlogo from "../../img/logoSite.png";

const HeaderNav = () => {
    return (
        <div className="headernav">
            <div className="headernav__logo">
                <img src={Mainlogo} alt="logo site" />
            </div>
            <div className="headernav__nav">
                <Link to="/" className="item">
                    Home
                </Link>
                <Link to="/tattoo" className="item">
                    Tattoo
                </Link>
                <Link to="/about" className="item">
                    About
                </Link>
                <Link to="jJournal" className="item">
                    Journal
                </Link>
                <Link to="/contacts" className="item">
                    Contacts
                </Link>
                <Link to="/pages" className="item">
                    Pages
                </Link>

                <button className="headernav__btn">Book</button>
            </div>
        </div>
    );
};

export default HeaderNav;
