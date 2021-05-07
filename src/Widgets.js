import React from "react";
import "./Widgets.css"
import {FiberManualRecord, Info} from "@material-ui/icons";

export default function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return (
            <div className="widgets_article">
                <div className="widgets_articleLeft">
                    <FiberManualRecord/>
                </div>
                <div className="widgets_articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    };


    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <Info/>
            </div>
            {newsArticle("React is back", "Top news - 9099 readers")}
            {newsArticle("Coronavirus: US updates", "Top news - 999 readers")}
            {newsArticle("Tesla hits new highs", "Cars & auto - 600 readers")}
            {newsArticle("BitCoin Breaks $50k", "Crypto - 8000 readers")}
            {newsArticle("Is Redux too good?", "Code - 256 readers")}
            {newsArticle("Is ReactNative good to know?", "Top news - 6553 readers")}
        </div>
    )
}