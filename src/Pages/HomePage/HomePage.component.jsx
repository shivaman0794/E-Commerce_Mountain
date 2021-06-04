import React from "react";
import './HomePage.styles.scss';
import Directory from "../../Component/Directory/Directory.component";

const HomePage = () => (

    <div className='homepage'>

        <header>
            <h1>This is mountain-clothing</h1>
        </header>
        <Directory />

    </div>
);

export default HomePage;