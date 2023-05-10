// import { useState } from "react";
import { useState } from "react";
import { journal, journal0, journal1, journal2 } from "../Library";
import "./JournalCard.scss";

const JournalCard = (props) => {
    const [quantity, setQuantity] = useState([]);
    const [count, setCount] = useState(0);

    const {
        journalItem0,
        journalItem1,
        journalItem2,
        journalItem3,
        journalItem4,
        journalItem5,
        journalItem6,
        journalItem7,
        journalItem8,
        journalItem9,
    } = props;
    const journalImg = [
        journalItem0,
        journalItem1,
        journalItem2,
        journalItem3,
        journalItem4,
        journalItem5,
        journalItem6,
        journalItem7,
        journalItem8,
        journalItem9,
    ];

    const videoContent = (video) => {
        return (
            <video>
                <source src={video} />
            </video>
        );
    };

    const getJournalCard = (arr) => {
        const array = arr.map((item, i) => {
            return (
                <div className="news__card" key={i + 231}>
                    <img src={journalImg[i]} alt="journalImage" />;
                    <div className="news__descr">
                        <h4>{item.hesh}</h4>
                        <p className="news__descr-title">{item.title}</p>
                        <p className="news__descr-text">{item.descr}</p>
                    </div>
                </div>
            );
        });
        return array;
    };
    const getCards = (arr) => {
        return setQuantity(quantity => quantity.concat(arr));
    }

    

    return (
        <>
            <div className="news">{getJournalCard(journal)}</div>
            <div className="down-btn"><button>Load more</button></div>;
        </>
    );
};

export default JournalCard;
