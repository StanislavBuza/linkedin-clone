import React from "react";
import "./Sidebar.css";
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img alt="" src="https://wallpaperaccess.com/full/935053.jpg"/>
                <Avatar src={user.photoURL} className="sidebar_avatar">
                    {user.email[0]}
                </Avatar>
                <h2> {user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who Viewed you</p>
                    <p className="sidebar_statNumber">2.129</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">2.529</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("softwareengineering")}
                {recentItem("reactjs")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    )
}

export default Sidebar;