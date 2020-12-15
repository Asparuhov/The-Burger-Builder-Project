import React, {Component} from 'react';
import classes from './Modal.module.css';
import Auxiliry from '../../../HigherOrderComponents/Auxiliry';
import BackDrop from '../Backdrop/BackDrop';
class Modal extends Component  {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    render() {
        return (
            <Auxiliry>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={classes.Modal}
                    style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'}}
                >
                    {this.props.children}
                </div>
            </Auxiliry>
        )
    }
};

export default Modal;