import React from 'react';
import Header from "./components/Header/Header";
import './styles/globals.css';
import TopBar from "./components/TopBar/TopBar";

const App = () => {
    return (
        <div>
            <Header language='En'/>
            <TopBar/>
        </div>
    );
};

export default App;