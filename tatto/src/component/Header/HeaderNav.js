import { NavLink } from "react-router-dom";
import onClickOutside from "react-click-outside";

import "./HeaderNav.scss";
import Mainlogo from "../../img/logoSite.png";
import { useState } from "react";

const HeaderNav = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    window.onclick = function (e) {
        if (!e.target.matches(".dropdown")) {
            if (open) {
                toggle();
            }
        }
    };

    const dropMenu = () => {
        return (
            <div className="dropdown__menu">
                <NavLink to="/coming-soon" className="dropdown__menu-link">
                    Coming Soon
                </NavLink>
                <NavLink to="/portfolio" className="dropdown__menu-link">
                    Portfolio
                </NavLink>
                <NavLink to="/gallery" className="dropdown__menu-link">
                    Gallery
                </NavLink>
            </div>
        );
    };

    const dropDown = open ? dropMenu() : null;

    return (
        <div className="headernav">
            <div className="headernav__logo">
                <img src={Mainlogo} alt="logo site" />
            </div>
            <div className="headernav__nav">
                <NavLink
                    to="/"
                    className="item"
                    style={({ isActive }) => ({
                        color: isActive ? "#ff5c35" : "#fff",
                    })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/tattoo"
                    className="item"
                    style={({ isActive }) => ({
                        color: isActive ? "#ff5c35" : "#fff",
                    })}
                >
                    Tattoo
                </NavLink>
                <NavLink
                    to="/about"
                    className="item"
                    style={({ isActive }) => ({
                        color: isActive ? "#ff5c35" : "#fff",
                    })}
                >
                    About
                </NavLink>
                <NavLink
                    to="journal"
                    className="item"
                    style={({ isActive }) => ({
                        color: isActive ? "#ff5c35" : "#fff",
                    })}
                >
                    Journal
                </NavLink>
                <NavLink
                    to="/contacts"
                    className="item"
                    style={({ isActive }) => ({
                        color: isActive ? "#ff5c35" : "#fff",
                    })}
                >
                    Contacts
                </NavLink>
                <div className="item dropdown" onClick={() => toggle()}>
                    Pages
                </div>
                {dropDown}

                <button className="headernav__btn">Book</button>
            </div>
        </div>
    );
};

export default HeaderNav;
