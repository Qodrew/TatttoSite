import "./WorkStyles.scss";
import oldSchool from "../img/old-school.jpg";
import japan from "../img/japan.jpg";
import realism from "../img/realism.jpg";
const WorkStyles = () => {
    return (
        <>
            <h2 className="title">Directions</h2>
            <div className="directions">
                <div className="directions__item">
                    <img src={oldSchool} alt="old" />
                    <h4>Old school</h4>
                    <p>
                        Old skull tattoos are quite easy to identify, as they
                        have pronounced features
                    </p>
                </div>
                <div className="directions__item">
                    <img src={japan} alt="jap" />
                    <h4>Erezumi</h4>
                    <p>
                        The pictures are not placed separately, but completely
                        cover the surface of the body with intricate patterns of
                        flowers, dragons, sacred carp, tigers and demons.
                    </p>
                </div>
                <div className="directions__item">
                    <img src={realism} alt="real" />
                    <h4>Realism</h4>
                    <p>
                        The style is realism: portraits, images of animals or
                        plants made with photographic precision.
                    </p>
                </div>
            </div>
        </>
    );
};

export default WorkStyles;
