
import "./TextTat.scss";
import flowerTat from "../img/tatTatIco.png"
const TextTat = () => {

        return (
            <div className="block-text">
                <img src={flowerTat} alt="flower" className="block-text__img"/>
                <p className="block-text__information">A tattoo on the body contains a limited amount of information about a certain segment of a person's life, his/her psychological behavior model, level of self-esteem and internal attitude towards society. Tattoos are made by people of different age categories for the purpose of self-expression, compensation for missing emotions, and socialization.</p>
            </div>
        );

}

export default TextTat;