import "./Festivals.scss";
import tattooAwards from "../../img/awards.png";
const Festivals = () => {
    return <section className="award">
        <h3>Festivals</h3>
        <p>Tattoos have a power and magic all their own. They decorate the body but they also enhance the soul.</p>
        <img src={tattooAwards} alt="our awards" />
    </section>;
};

export default Festivals;
