import React from 'react';
import Header from "./components/Header/Header";

import Banner from "./components/Banner/Banner";
import News from "./components/News/News";
import Disciplines from "./components/Disciplines/Disciplines";

const App: React.FC = () => {
    return (
        <div>
            <Header language='En'/>
            <Banner/>
            <News/>
            <Disciplines/>
        </div>
    );
};

export default App;