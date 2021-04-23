import React from "react";
import "./Header.css";
import {Search as SearchIcon, Home, SupervisorAccount, BusinessCenter, Chat, Notifications} from "@material-ui/icons";
import HeaderOption from "./HeaderOption";

function Headerr() {
    return (
        <h1 className="header">
            <div className="header_left">
                <img src="https://flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header_search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={Home} title="Home"/>
                <HeaderOption Icon={SupervisorAccount} title="My Network"/>
                <HeaderOption Icon={BusinessCenter} title="Jobs"/>
                <HeaderOption Icon={Chat} title="Messaging"/>
                <HeaderOption Icon={Notifications} title="Notifications"/>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E35AQF9JHQwR7sc_w/profile-framedphoto-shrink_400_400/0/1612290769437?e=1619240400&v=beta&t=opqB3A60-3bB02omRTb7pExaT8_8BWRUYKq2_SPaQeY"
                title="Me"/>
            </div>


        </h1>
    )
}

export default Headerr;
