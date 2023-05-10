import "./HeaderDescr.scss";

const HeaderDescr = (props) => {
    const {title, text} = props;
    return (
        <div className="headerD">
            <h1 className="headerD__title">{title}</h1>
            <div className="headerD__divider"></div>
            <p className="headerD__text">{text}</p>
        </div>
    );
};

export default HeaderDescr;