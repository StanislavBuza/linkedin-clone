import React from "react";
import "./Feed.css"
import {Create} from "@material-ui/icons";

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <Create/>
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )

}