import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Main from "./pages/Main";
import Tattoo from "./pages/Tattoo";
import HeaderNav from "./component/Header/HeaderNav";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Journal from "./pages/Journal";
import Soon from "./pages/Soon";
import Portfolio from "./pages/Portfolio";


function App() {
    return (
        <Router>
            <HeaderNav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/tattoo" element={<Tattoo />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/coming-soon" element={<Soon />} />
                <Route path="/portfolio" element={<Portfolio />} />

            </Routes>
        </Router>
    );
}

export default App;
