import "./Footer.scss";
import footWoman from "../img/footer-2.png";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";
import inst from "../img/inst.png";
const FooterSite = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer__location">
                    <h2 className="footer__title">Say hi</h2>
                    <h4>Los Angeles, CA</h4>
                    <p className="footer__adress">1120 W Manchester Blvd</p>
                    <a href="tel:+19172272842" className="footer__phone">
                        1-917-227-2842
                    </a>
                    <a
                        href="mailto:uroboros-tattoo@gmail.com"
                        className="footer__mail"
                    >
                        uroboros-tattoo@gmail.com
                    </a>
                    <p className="footer__by">© 2023 Tattoo Uroboros</p>
                </div>
                <div className="footer__img">
                    <img src={footWoman} alt="find us" />
                </div>
                <div className="footer__social">
                    <h4>Stay in touch</h4>
                    <input type="text" placeholder="E-mail" />
                    <button className="footer__sub">Subscribe</button>
                    <div className="footer__web">
                        <img
                            src={facebook}
                            alt="us twitter"
                            className="facebook"
                        />
                        <img src={twitter} alt="us twitter" className="twit" />
                        <img src={inst} alt="us twitter" className="inst" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSite;
