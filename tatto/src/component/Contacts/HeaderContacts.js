import "./HeaderContacts.scss";

const HeaderContacts = () => {
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

    return (
        <header className="headerc">
            <div className="headerc__map">
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
            </div>
        </header>
    );
};

export default HeaderContacts;
