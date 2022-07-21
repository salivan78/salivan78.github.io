import React from "react";
import {Navbar} from "../Navbar/Navbar";
import home from './Home.module.css'

const Home = () => {

    return (
        <div className={home.home_text}>
            <Navbar/>
            <div>ДОМ</div>
        </div>
    )
}

export default Home