import React, { useState, useEffect} from 'react';
import Navbar from './Navbar';
import { TabBarOnActivateEventT } from 'rmwc';

import config from '../../common/config/navbar/tabs.json';

import {useLocation} from 'react-router-dom';

const NavbarController = () => {
    const [activeTab, changeTabIndex] = useState(0);

    // workaround to fix bug with the tab active index not working properly after clicking browser back button
    useLocation();

    //changing the tab index any time the browser path changes 
    useEffect(() => {
        config.forEach((tab, index) => {
            if(tab.path === window.location.pathname) {
                changeTabIndex(index)
            }
        })
    }, [window.location.pathname])

    const onTabClick = (e: TabBarOnActivateEventT) => {
        changeTabIndex(e.detail.index)
    }

    return (
        <Navbar
            onTabClick={onTabClick}
            activeTab={activeTab}
        />
    )
};

export default NavbarController;