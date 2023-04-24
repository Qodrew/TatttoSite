import "./HowChoose.scss";
import pion from "../img/pion.png"
const HowChoose = () => {
    return (
        <div className="take-shoose">
            <h2 className="title">How to choose a tattoo?</h2>
            <div className="take-shoose__items">
                <div className="take-shoose__item">
                    <span className="material-symbols-outlined">
                        award_star
                    </span>
                    <h3>1.</h3>
                    <h4>Consider where you want the tattoo.</h4>
                    <p>
                        This will have some influence on the design, especially
                        if it’s an intimate design. For any parts of your body
                        that you show regularly (and that is a lot of body if
                        you’re a bikini or board shorts wearer), then that
                        doesn’t leave much space for intimate tattoos that you
                        don’t want your grandmother seeing.
                    </p>
                </div>
                <div className="take-shoose__item">
                    <span className="material-symbols-outlined">
                        award_star
                    </span>
                    <h3>2.</h3>
                    <h4>
                        Spend some time refining the design and choosing one
                        that has meaning for you.
                    </h4>
                    <p>
                        Do some research first. Head over to the library or a
                        reputable tattoo parlor and look through tattoo design
                        book
                    </p>
                </div>
                <div className="take-shoose__item">
                    <span className="material-symbols-outlined">
                        award_star
                    </span>

                    <h3>3.</h3>
                    <h4>Try a rehearsal run of the tattoo.</h4>
                    <p>
                        Use henna to get a temporary version of the design. You
                        won’t be able to see different colors, or certain looks,
                        but you will be able to judge the feeling of a tattoo.
                        Henna lasts a week to a month.
                    </p>
                </div>
                <div className="take-shoose__item">
                    <span className="material-symbols-outlined">
                        award_star
                    </span>

                    <h3>4.</h3>
                    <h4>Avoid making any rash decisions.</h4>
                    <p>
                        If you’re getting a tattoo because you’re drunk or high,
                        rebellious or your friends are goading you, then you’re
                        getting a tattoo for all the wrong reasons and the
                        choice you make is likely to reflect this lack of
                        forethought.
                    </p>
                </div>
                <div className="take-shoose__item">
                    <span className="material-symbols-outlined">
                        award_star
                    </span>

                    <h3>5.</h3>
                    <h4>Think before you ink.</h4>
                    <p>
                        Think about it a lot. When you are certain, wait some
                        more just to make sure. Ultimately, a well chosen tattoo
                        design can be a thing of beauty and a confidence
                        enhancement. A poorly chosen one done on a whim can
                        leave you unhappy for all time.
                    </p>
                </div>
            </div>
            <img src={pion} alt="pion" />
        </div>
    );
};

export default HowChoose;
