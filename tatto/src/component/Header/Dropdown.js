import { Link } from "react-router-dom";

import "./Dropdown.scss";

const Dropdown = () => {
  
    return (
        <div className="dropdown__menu">
            <Link to="/feature" className="dropdown__menu-link">
                Features List
            </Link>
            <Link to="/coming-soon" className="dropdown__menu-link">
                Coming Soon
            </Link>
            <Link to="/portfolio" className="dropdown__menu-link">
                Portfolio
            </Link>
            <Link to="/gallery" className="dropdown__menu-link">
                Gallery
            </Link>
        </div>
    );
};

export default Dropdown;
