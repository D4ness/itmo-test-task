import React from 'react';
import './styles/globals.css';
import './fonts/Muller/stylesheet.css';
import Header from "./components/Header/Header";
import TopBar from "./components/TopBar/TopBar";
import Banner from "./components/Banner/Banner";

const App: React.FC = () => {
    return (
        <div>
            <Header language='En'/>
            <TopBar/>
            <Banner/>
        </div>
    );
};

export default App;