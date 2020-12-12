import React from 'react';
import Logo from '../../Navigation/Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './SideDrawer.module.css'
const SideDrawer = props => {
    
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
               <Logo />
             </div>
            <nav>
                <NavigationItems/>
            </nav>
          
        </div>
    )
};

export default SideDrawer;