import React from 'react';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import FooterBar from '../../shared/FooterBar/FooterBar';

const MainLayouts = () => {
    return (
        <div>
            
            <div>
                <NavigationBar></NavigationBar>
            </div>

            <div>
                <FooterBar></FooterBar>
            </div>

        </div>
    );
};

export default MainLayouts;