import React from "react";
import "./Header.css";
import {Search as SearchIcon, Home, SupervisorAccount, BusinessCenter, Chat, Notifications} from "@material-ui/icons";
import HeaderOption from "./HeaderOption";
import {useDispatch} from "react-redux";
import {logout} from "./features/userSlice";
import {auth} from "./firebase";

function Headerr() {

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut().catch(error => alert(error));
    };

    return (
        <h1 className="header">
            <div className="header_left">
                <img src="https://flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header_search">
                    <SearchIcon/>
                    <input placeholder="Search" type="text"/>
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={Home} title="Home"/>
                <HeaderOption Icon={SupervisorAccount} title="My Network"/>
                <HeaderOption Icon={BusinessCenter} title="Jobs"/>
                <HeaderOption Icon={Chat} title="Messaging"/>
                <HeaderOption Icon={Notifications} title="Notifications"/>
                <HeaderOption avatar={true}
                              title="Me"
                onClick={logoutOfApp}/>
            </div>


        </h1>
    )
}

export default Headerr;
