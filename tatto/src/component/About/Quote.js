import "./Quote.scss";

const Quote = (props) => {
    const {quote} = props;
    return (
        <section className="qoter-box">
            <span className="material-symbols-outlined">award_star</span>
            <p>
                {quote}
            </p>
        </section>
    );
};

export default Quote;
