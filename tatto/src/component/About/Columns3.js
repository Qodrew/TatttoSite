import "./Columns3.scss";
import { aboutLib } from "../Library";

const Columns3 = () => {
    const renderDescr = (array) => {
        return array.map((item, i) => {
            return (
                <div className="text-box__item" key={i + 122}>
                    <h3>{item.title}</h3>
                    <p>{item.descr}</p>
                </div>
            );
        });
    };

    return <div className="text-box">{renderDescr(aboutLib)}</div>;
};

export default Columns3;
