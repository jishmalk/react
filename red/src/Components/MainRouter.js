import React from "react";

import {Route, Routes, Link} from "react-router-dom";
import About from "../Components/About";
import Home from "../Components/Home";


const MainRouter =() => {
    return(
        <div>
            <ul>
                <li>
                    <Link to ={'/'}>Home</Link>
                </li>
                <li>
                    <Link to ={"/about"}>About</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/about" element={<About />} />

            </Routes>
        </div>
    )
}
export default MainRouter;
