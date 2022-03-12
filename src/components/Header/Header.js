// IMPORT PACKAGE REFERENCES

import React, {useState} from 'react';
import "../../styles/components/header.scss";
import Day from "../../../public/images/day.png";
import Night from "../../../public/images/night.png";

export const Header = () => {

    const [dayAndNight, setDayAndNight] = useState(true);

    const onClickHandle = (e) => {
        e.preventDefault();        
        setDayAndNight(!dayAndNight)
    }

    return (
        <React.Fragment>
            <div className="header">
                <nav className="nav-account">
                    <ul>
                        <li>
                            <a href="https://medium.com/@dontbuymeme/guide-how-to-stake-on-meme-v2-ba7bf9e08f0b" className="link" target="__blank">How to Stake Meme</a>
                        </li>
                    </ul>
                </nav>
                <div className="nav-user">
                    <nav className="nav-address">
                        <button type="button">Connect</button>
                    </nav>
                    <a className="switch-theme" onClick={(e) => onClickHandle(e)}>
                        {dayAndNight ? <img src={`${Day}`} /> : <img src={`${Night}`} /> }
                    </a>
                </div>
            </div>
        </React.Fragment>        
    );
};