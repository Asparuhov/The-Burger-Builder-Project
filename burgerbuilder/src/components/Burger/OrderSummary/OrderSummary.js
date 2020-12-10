import React from 'react';
import Auxiliry from '../../../HigherOrderComponents/Auxiliry';
const OrderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients).map(element => {
        return (<li key={element}><span style={{textTransform: 'capitilize'}}>{element}</span>: {props.ingredients[element]}</li>)

    });
    return (
        <Auxiliry>
            <h3>Your order</h3>
            <p>Delicious burger with following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Final price: {props.finalPrice.toFixed(2)} </p>
        </Auxiliry>
    );
};
export default OrderSummary;