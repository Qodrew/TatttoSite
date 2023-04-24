import HeaderAbout from "../component/Header/HeaderAbout";
import Expression from "../component/About/Expression";
import Slide from "../component/About/Slide";
import Columns3 from "../component/About/Columns3";
import Quote from "../component/About/Quote";
import ArtistCard from "../component/About/ArtistCard";
import { quote } from "../component/Library";

import historySlide from "../img/historyAbout.jpg"
import artistSlide from "../img/slideAbout2.png"
import awardSlide from "../img/slideAbout3.png"
import { master1, master2, master3, master4 } from "../component/Library";


const About = () => {
        return (
            <>
                <HeaderAbout/>
                <Expression/>
                <Slide slide={historySlide} title={"History"}/>
                <Columns3/>
                <Quote quote={quote[0]}/>
                <Slide slide={artistSlide} title={"Artists"}/>
                <Quote quote={quote[1]}/>
                <ArtistCard master0={master1} master1={master2} master2={master3} master3={master4}/>
                <Slide slide={awardSlide} title={"Awards!"}/>
            </>
        );
}

export default About;