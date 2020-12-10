import React from 'react';
import Auxiliry from '../../HigherOrderComponents/Auxiliry'
import classes from './Layout.module.css'
const Layout = props => (
    <Auxiliry>
       <div>Toolbar, SideDrawer, Backdrop</div>
       <main className={classes.Content}>
          {props.children}
       </main>
    </Auxiliry>
)


export default Layout;