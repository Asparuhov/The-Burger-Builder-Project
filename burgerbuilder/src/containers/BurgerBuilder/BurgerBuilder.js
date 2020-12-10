import React, {Component} from 'react';
import Auxiliry from '../../HigherOrderComponents/Auxiliry';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UserInterface/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        Purchasable: false,
        TotalPrice: 0.5,
        choosingFinished: false
    }
    order = () => {
        
        this.setState({choosingFinished: true})
    }
    isPurchasable = (ingredients) => {
        let sum = Object.values(ingredients).reduce((a, b) => a + b, 0);
        this.setState({Purchasable: sum > 0})
        
    }
    addIngredient = (type) => {
        let updatedCount = this.state.ingredients[type] + 1;
        let copy = {...this.state.ingredients}
        copy[type] = updatedCount;
        
        let priceAddition = INGREDIENT_PRICES[type];
        let updatedPrice = this.state.TotalPrice + priceAddition;

        this.setState({ingredients: copy, TotalPrice: updatedPrice});
        this.isPurchasable(copy);
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

        this.setState({ingredients: copy, TotalPrice: updatedPrice});
        this.isPurchasable(copy);
    }
    cancelPurchase = () => {
        this.setState({choosingFinished: false})
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
                <Modal show = {this.state.choosingFinished} modalClosed={this.cancelPurchase}>
                    <OrderSummary ingredients={this.state.ingredients} finalPrice={this.state.TotalPrice} />
                </Modal>
                  
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredient}
                    ingredientRemoved={this.removeIngredient}
                    disabled={disabledInfo}
                    price={this.state.TotalPrice}
                    purchasable={this.state.Purchasable}
                    clicked={this.order}
                />
            </Auxiliry>
        );

    }

}
export default BurgerBuilder;