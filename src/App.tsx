import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import AllSkills from './skills/AllSkills';
import Contacts from './contacts/Contacts';
import AllProjects from './projects/AllProjects';
import Footer from './footer/Footer';
import AboutMe from './hireMe/HireMe';

export const App = () => (
    <div className="App">
        {/*<Header />*/}
        <Main />
        <AllSkills />
        <AllProjects />
        <AboutMe />
        <Contacts />
        {/*<Footer />*/}
    </div>
);