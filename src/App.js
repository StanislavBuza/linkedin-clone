import React from 'react';
import './App.css';
import Headerr from "./Headerr";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
    return (
        <div className="app">
            <Headerr/>
            <div className="app_body">
                <Sidebar/>
                <Feed/>
            </div>
        </div>
    );
}

export default App;
