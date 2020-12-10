import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'}
];
const BuildControls = props => (
    <div className={classes.BuildControls}>
        <p><strong>Current price:</strong> <strong>{props.price.toFixed(2)}$</strong></p>
        {controls.map(element => {
            return <BuildControl
                key={element.label}
                label={element.label}
                removed={() => props.ingredientRemoved(element.type)}
                added={() => props.ingredientAdded(element.type)}
                disabled = {props.disabled[element.type]}
            />
        })}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.clicked}>ORDER NOW</button>
    </div>
)

export default BuildControls