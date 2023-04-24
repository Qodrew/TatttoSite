

import "./Ready.scss";
import readyBg from "../img/ready.png";
const Ready = () =>{

        return (
            <div className="order">
                <img src={readyBg} alt="are you ready?" />
                <h2 className="title-ready">Ready?</h2>
                <button className="contact-btn">Contact me</button>
            </div>
        );

}

export default Ready;