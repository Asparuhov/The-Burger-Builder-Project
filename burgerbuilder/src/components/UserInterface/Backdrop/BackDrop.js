import React from 'react';
import Modal from '../Modal/Modal';
import classes from './BackDrop.module.css'
const BackDrop = props => (
    
    props.show ? <div className={classes.BackDrop} onClick={props.clicked}></div> : null
);

export default BackDrop;