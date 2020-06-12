import React from 'react';
import {TabBar, TabBarOnActivateEventT} from 'rmwc';

import TabRenderer from './TabRenderer/TabRenderer';

import './Navbar.scss';

const Navbar = (props: {
    onTabClick: (e: TabBarOnActivateEventT) => void,
    activeTab: number,
}) => {

    return (
        <nav className="navbar">
            <TabBar activeTabIndex={props.activeTab} onActivate={props.onTabClick} className="navbar__link-list">
                <TabRenderer />
            </TabBar>
        </nav>
    )
}

export default Navbar;