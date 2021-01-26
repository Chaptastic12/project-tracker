import React from 'react';
import NavLinks from './NavLinks';
import MainHeader from './MainHeader';
import './MainNavigation.css';

const MainNavigation = props => {
     return (
          <div className="main-nav">
               <MainHeader>
                    <h2 className="main-nav_title">WOTA</h2>
                    <nav><NavLinks /></nav>
               </MainHeader>
          </div>
     );
}

export default MainNavigation;