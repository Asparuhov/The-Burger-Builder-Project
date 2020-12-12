import React from 'react';
import Logo from '../../Navigation/Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './SideDrawer.module.css';
import BackDrop from '../../UserInterface/Backdrop/BackDrop';
import Auxiliry from '../../../HigherOrderComponents/Auxiliry';
const SideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxiliry>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
               <Logo />
             </div>
            <nav>
                <NavigationItems/>
            </nav>
          
            </div>
        </Auxiliry>
    )
};

export default SideDrawer;