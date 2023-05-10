import HeaderDescr from "../component/Header/HeaderDescr";

import "./Soon.scss";

import twitter from "../img/twitter-icon.svg";
import facebook from "../img/facebook-icon.svg";
import inst from "../img/inst-icon.svg";
import { useEffect, useState } from "react";

const Soon = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailDirty, setEmailDitry] = useState(false);
    const [nameDirty, setNameDitry] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [emailError, setEmailError] = useState(
        "Please enter your email address."
    );
    const [nameError, setNameError] = useState("Please enter your name.");

    useEffect(() => {
        if (nameError || emailError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, nameError]);

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "name":
                setNameDitry(true);
                break;
            case "email":
                setEmailDitry(true);
                break;
            default:
                break;
        }
    };

    const nameHandler = (e) => {
        setName(e.target.value);
        const reg = /^[a-zA-Z ]+$/;
        if (!reg.test(e.target.value) || e.target.value.length > 12) {
            setNameError("Your name was not recognized.");
            setErrorName(true);
        } else {
            setNameError("");
            setErrorName(false);
        }
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Your email address doesn't valid.");
            setErrorEmail(true);
        } else {
            setEmailError("");
            setErrorEmail(false);
        }
    };
    const checkBorderName = errorName ? "red" : "#fff";
    const checkBorderEmail = errorEmail ? "red" : "#fff";
    return (
        <div className="soon">
            <h1>Uroboros</h1>
            <p className="soon__title">Something Awesome Is Coming</p>
            <form className="soon__form">
                <div className="soon__name">
                    <input
                        onChange={(e) => nameHandler(e)}
                        value={name}
                        onBlur={(e) => blurHandler(e)}
                        name="name"
                        type="text"
                        placeholder="Name"
                        style={{ border: `1px solid ${checkBorderName}` }}
                    />
                    {nameDirty && nameError && (
                        <div
                            className="soon__checking-name"
                            style={{ color: "#fff" }}
                        >
                            {nameError}
                        </div>
                    )}
                </div>
                <div className="soon__email">
                    <input
                        onChange={(e) => emailHandler(e)}
                        value={email}
                        onBlur={(e) => blurHandler(e)}
                        name="email"
                        type="email"
                        placeholder="E-mail Address"
                        style={{ border: `1px solid ${checkBorderEmail}` }}
                    />
                    {emailDirty && emailError && (
                        <div
                            className="soon__checking-email"
                            style={{ color: "#fff" }}
                        >
                            {emailError}
                        </div>
                    )}
                </div>
                <button disabled={!formValid}>Sign up!</button>
            </form>

            <p className="soon__text">It's going to be amazing!</p>
            <p className="soon__text">Sign up to find out when it's ready.</p>
            <div className="soon__social">
                <a href="https://www.facebook.com/">
                    <img src={facebook} alt="us twitter" className="faceb" />
                </a>
                <a href="https://twitter.com/">
                    <img src={twitter} alt="us twitter" className="twit" />
                </a>

                <a href="https://www.instagram.com/">
                    <img src={inst} alt="us twitter" className="ins" />
                </a>
            </div>
        </div>
    );
};

export default Soon;
