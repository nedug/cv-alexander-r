import React from 'react';
import Main from './main/Main';
import AllSkills from './skills/AllSkills';
import Contacts from './contacts/Contacts';
import AllProjects from './projects/AllProjects';

export const App = () => (

    // OverlayScrollbars();

    <div className="App">
        {/*<Header />*/}
        <Main />
        <AllSkills />
        <AllProjects />
        {/*<AboutMe />*/}
        <Contacts />
        {/*<Footer />*/}
    </div>
);