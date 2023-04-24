import "./EricExp.scss";
import eric from "../img/eric.png"
const EricExp = () => {
    return (
        <div className="expression">
            <div className="expression__img">
                <img src={eric} alt="men" />
            </div>
            <div className="expression__descr">
                <h2 className="expression__title">Eerik Martinsen</h2>
                <p className="expression__text">
                    If you’re getting a tattoo because you’re drunk or high,
                    rebellious or your friends are goading you, then you’re
                    getting a tattoo for all the wrong reasons and the choice
                    you make is likely to reflect this lack of forethought.
                </p>
            </div>
        </div>
    );
};

export default EricExp;
