import React from 'react';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import FooterBar from '../../shared/FooterBar/FooterBar';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            
            <div>
                <NavigationBar></NavigationBar>
            </div>

            <div>
                <Outlet></Outlet>
            </div>

            <div>
                <FooterBar></FooterBar>
            </div>

        </div>
    );
};

export default MainLayouts;