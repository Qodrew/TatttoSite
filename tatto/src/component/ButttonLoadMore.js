import "./ButtonLoadMore.scss";

const ButttonLoadMore = (prop) => {
    const {getElements, elements } = prop;
    return <div className="down-btn" onClick={() => getElements(elements)}><button>Load more</button></div>;
};

export default ButttonLoadMore;
