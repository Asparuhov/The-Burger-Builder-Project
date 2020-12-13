import React, {Component} from 'react';
import Auxiliry from '../../HigherOrderComponents/Auxiliry'
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
   state = {
      showSidedrawer:true
   }
   closeSideDrawer = () => {
      this.setState({showSidedrawer: false});
   }
   toggleDrawer = () => {
      this.setState((prevState) => {return {showSidedrawer: !this.state.showSidedrawer}})
   }
   render() {
      return(
      <Auxiliry>
            <Toolbar clicked={this.toggleDrawer}/>
            <SideDrawer open={this.state.showSidedrawer} closed={this.closeSideDrawer}/>
         <main className={classes.Content}>
            {this.props.children}
         </main>
      </Auxiliry>
      )}
}


export default Layout;