import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Main from "./pages/Main";
import Tattoo from "./pages/Tattoo";
import HeaderNav from "./component/Header/HeaderNav";
import About from "./pages/About";

function App() {
    return (
        <Router>
            <HeaderNav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/tattoo" element={<Tattoo />} />
                <Route path="/about" element={<About />} />

            </Routes>
        </Router>
    );
}

export default App;
