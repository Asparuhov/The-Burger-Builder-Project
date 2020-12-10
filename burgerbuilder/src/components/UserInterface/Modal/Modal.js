import React from 'react';
import classes from './Modal.module.css';
import Auxiliry from '../../../HigherOrderComponents/Auxiliry';
import BackDrop from '../Backdrop/BackDrop';
const Modal = props => (
    <Auxiliry>
        <BackDrop show={props.show} clicked={props.modalClosed}/>
    <div className={classes.Modal}
        style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}
    >
        {props.children}
    </div>
    </Auxiliry>
);

export default Modal;