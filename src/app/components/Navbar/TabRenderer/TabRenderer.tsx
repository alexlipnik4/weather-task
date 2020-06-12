import React from 'react';
import {Link} from 'react-router-dom';

import config from '../../../common/config/navbar/tabs.json';

import {Tab} from 'rmwc';

const TabRenderer = () => (
    <>
        {config.map((tab: any, index: number) =>  (
            <Link key={index} to={tab.path}>
                <Tab className="navbar__nav-link">
                    {tab.label}
                </Tab>
            </Link>
        ))}
    </>
)

export default TabRenderer;