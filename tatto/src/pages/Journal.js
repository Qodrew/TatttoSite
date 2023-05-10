import HeaderDescr from "../component/Header/HeaderDescr";
import JournalCard from "../component/Journal/JournalCard";
import { j0, j1, j2, j3, j4, j5, j6, j7, j8, j9 } from "../component/Library";

import FooterSite from "../component/FooterSite";

const Journal = () => {
    return (
        <>
            <HeaderDescr title={"Journal"} text={"News and inspiration"}/>
            <JournalCard
                journalItem0={j0}
                journalItem1={j1}
                journalItem2={j2}
                journalItem3={j3}
                journalItem4={j4}
                journalItem5={j5}
                journalItem6={j6}
                journalItem7={j7}
                journalItem8={j8}
                journalItem9={j9}
            />
            <FooterSite />
        </>
    );
};

export default Journal;
