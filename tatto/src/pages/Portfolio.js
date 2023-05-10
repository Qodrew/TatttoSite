import HeaderDescr from "../component/Header/HeaderDescr";
import { PortfolioGallery } from "../component/Portfolio/PortfolioGallery";
const Portfolio = () => {
    return (
        <>
            <HeaderDescr title={"Portfolio"} text={"Detail projects style"}/>   
            <PortfolioGallery/>
        </>
    );
};


export default Portfolio;