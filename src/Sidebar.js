import React from "react";
import "./Sidebar.css";
import {Avatar} from "@material-ui/core";

function Sidebar() {

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
                <Avatar/>
                <h2> Stanislav Buza</h2>
                <h4>StanislavBuza@Yahoo.com</h4>
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