import React from 'react';
import BurgerIngredient from '../Burger/BurgetIngredients/BurderIngredients';
import classes from './Burger.module.css';
const Burger = props => {
    let reformedIngredients = Object.keys(props.ingredients).map(element => {
        return [...Array(props.ingredients[element])].map((_, i) => {
            return <BurgerIngredient key={element + i} type={element} />
        })

    }).reduce((a, b) => {
        return a.concat(b);
    });
    if (reformedIngredients.length === 0) {
        reformedIngredients = <p>Please start adding ingrediens!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'}/>
            {reformedIngredients}
            <BurgerIngredient type={'bread-bottom'}/>
         </div>  
       );
};
export default Burger;