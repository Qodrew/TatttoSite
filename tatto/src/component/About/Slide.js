import "./SlideHistoty.scss";


const Slide = (props) => {
    const {slide, title} = props;
    return (
        <div className="slide" style={{backgroundImage: `url(${slide})`}}>
            <span className="material-symbols-outlined">award_star</span>
            <h2>{title}</h2>
        </div>
    );
};

export default Slide;
