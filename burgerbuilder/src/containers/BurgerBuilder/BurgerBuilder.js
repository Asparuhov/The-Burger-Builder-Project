import React, {Component} from 'react';
import Auxiliry from '../../HigherOrderComponents/Auxiliry';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    meat: 1.2,
    cheese: 0.8,
    salad: 0.5,
    bacon: 1.1
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        TotalPrice: 0.5
    }
    addIngredient = (type) => {
        let updatedCount = this.state.ingredients[type] + 1;
        let copy = {...this.state.ingredients}
        copy[type] = updatedCount;
        
        let priceAddition = INGREDIENT_PRICES[type];
        let updatedPrice = this.state.TotalPrice + priceAddition;

        this.setState({ingredients: copy, TotalPrice: updatedPrice})
    }
    removeIngredient = (type) => {
        let updatedCount = this.state.ingredients[type] - 1;
        if (this.state.ingredients[type] <= 0) {
            return;
        }
        let copy = {...this.state.ingredients}
        copy[type] = updatedCount;
        
        let priceRemoval = INGREDIENT_PRICES[type];
        let updatedPrice = this.state.TotalPrice - priceRemoval;

        this.setState({ingredients: copy, TotalPrice: updatedPrice})
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Auxiliry>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredient}
                    ingredientRemoved={this.removeIngredient}
                    disabled={disabledInfo}
                    price={this.state.TotalPrice}
                />
            </Auxiliry>
        );

    }

}
export default BurgerBuilder;