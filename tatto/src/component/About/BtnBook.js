import "./BtnBook.scss"

const BtnBook = props => {
    return (
        <div className="btn-order">
            <span className="material-symbols-outlined">award_star</span>
            <button className="btn-order__btn">Book at appointmen</button>
        </div>
    );
};

BtnBook.propTypes = {
    
};

export default BtnBook;