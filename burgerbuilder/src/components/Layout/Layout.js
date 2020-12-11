import React from 'react';
import Auxiliry from '../../HigherOrderComponents/Auxiliry'
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const Layout = props => (
    <Auxiliry>
       <Toolbar/>
       <main className={classes.Content}>
          {props.children}
       </main>
    </Auxiliry>
)


export default Layout;