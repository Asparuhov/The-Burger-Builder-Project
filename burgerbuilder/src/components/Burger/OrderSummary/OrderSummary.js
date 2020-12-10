import React from 'react';
import Auxiliry from '../../../HigherOrderComponents/Auxiliry';
const OrderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients).map(element => {
        return (<li><span style={{textTransform: 'capitilize'}}>{element}</span>: {props.ingredients[element]}</li>)

    });
    return (
        <Auxiliry>
            <h3>Your order</h3>
            <p>Delicious burger with following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
        </Auxiliry>
    );
};
export default OrderSummary;