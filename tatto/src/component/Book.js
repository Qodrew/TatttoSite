import { useState } from "react";

import "./Book.scss";

const Book = () => {
    const [active, setActive] = useState("booking");

    const showContent = (block) => {
        setActive(block);
    };

    const booking = () => {
        return (
            <div className="booking">
                <div className="book__booking">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="E-mail" />
                    <input type="tel" placeholder="Phone" />
                    <input type="text" placeholder="Tattoo" />
                    <input
                        type="date"
                        className="inpDat"
                        placeholder="Choose date"
                    />
                    <input type="time" placeholder="Choose time" />
                </div>
                <textarea
                    name="input"
                    placeholder="Describe the design, colors, size and placement"
                ></textarea>
                <button className="book__btn">Book an appointment</button>
            </div>
        );
    };
    const price = () => {
        return (
            <div className="price">
                <div className="price__item">
                    <h3>Colored</h3>
                    <div className="price__item-block">
                        $150 - $200
                        <span>Per hour</span>
                    </div>
                    <ul className="price__item-ul">
                        <li>Traditional</li>
                        <li>Japanese</li>
                        <li>Realism</li>
                        <li>Watercolour</li>
                        <li>New School</li>
                        <li>Neo Traditional</li>
                    </ul>
                    <button className="price__item-btn">Book</button>
                </div>
                <div className="price__item">
                    <h3>Black & Gray</h3>
                    <div className="price__item-block">
                        $120 - $150
                        <span>Per hour</span>
                    </div>
                    <ul className="price__item-ul">
                        <li>Tribal</li>
                        <li>Dotwork</li>
                        <li>Geometric</li>
                        <li>Script</li>
                        <li>Realism</li>
                        <li>Neo Traditional</li>
                    </ul>
                    <button className="price__item-btn">Book</button>
                </div>
                <div className="price__item">
                    <h3>Custom</h3>
                    <div className="price__item-block">
                        $300
                        <span>Start price</span>
                    </div>
                    <ul className="price__item-ul">
                        <li>Arm</li>
                        <li>Leg</li>
                        <li>Back</li>
                        <li>Chest</li>
                        <li>Face</li>
                        <li>Portrait</li>
                    </ul>
                    <button className="price__item-btn">Let's talk</button>
                </div>
            </div>
        );
    };

    const adressMap = () => {
        return (
            <section className="map">
                <div className="map__item">
                    <iframe
                        title="Our map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1654.6318395891599!2d-118.37774723503509!3d33.960061599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b7247ae95e39%3A0x386e90c15ea6d67a!2zMTEyMCBXIE1hbmNoZXN0ZXIgQmx2ZCwgSW5nbGV3b29kLCBDQSA5MDMwMSwg0KHQqNCQ!5e0!3m2!1sru!2skg!4v1682063095906!5m2!1sru!2skg"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        );
    };

    const bookingContent = active === "booking" ? booking() : null;
    const priceContent = active === "prices" ? price() : null;
    const mapContent = active === "adressMap" ? adressMap() : null;

    return (
        <div className="book">
            <div className="book__box">
                <h2>Meet us</h2>
                <div className="book__box-time">
                    <div className="book__days">
                        <p>Weekdays</p>
                        <p>07:00am – 11:00pm</p>
                    </div>
                    <div className="book__days">
                        <p>Weekends</p>
                        <p>9:00pm – 12:00pm</p>
                    </div>
                    <div className="book__days">
                        <p>Telephone</p>
                        <p>+359 88 562 958</p>
                    </div>
                </div>
                <div
                    className="book__nav"
                    onClick={() => showContent("booking")}
                >
                    Book
                </div>
                <div
                    className="book__nav"
                    onClick={() => showContent("prices")}
                >
                    Prices
                </div>
                <div
                    className="book__nav"
                    onClick={() => showContent("adressMap")}
                >
                    Map
                </div>
                {bookingContent}
                {priceContent}
                {mapContent}
            </div>
        </div>
    );
};

export default Book;
