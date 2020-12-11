import React from 'react';
import Auxiliry from '../../../HigherOrderComponents/Auxiliry';
import Button from '../../UserInterface/Button/Button';
const OrderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients).map(element => {
        return (<li key={element}><strong><span style={{textTransform: 'capitilize'}}>{element}</span>: {props.ingredients[element]}</strong></li>)

    });
    return (
        <Auxiliry>
            <h3>Your order</h3>
            <p><strong>Delicious burger with following ingredients:</strong></p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total price: {props.finalPrice.toFixed(2)}$</strong> </p>
            <Button btnType={'Danger'} clicked={props.clickedCancel}>CANCEL</Button>
            <Button btnType={'Success'} clicked={props.clickedContinue}>CONTINUE</Button>
        </Auxiliry>
    );
};
export default OrderSummary;