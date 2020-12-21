import * as actionTypes from './actions';
import axios from 'axios';
const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    },
    totalPrice: 4
}
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
         case actionTypes.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] + 1
                }
            }
            case actionTypes.REM_INGREDIENTS:
                return {
                    ...state,
                    ingredients: {
                        ...state.ingredients,
                        [action.ingredient]: state.ingredients[action.ingredient] - 1
                    }
                }
        default:
            return state;
    }
  
}

export default reducer;

/* addIngredientHandler = ( type ) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
    this.updatePurchaseState( updatedIngredients );
}

removeIngredientHandler = ( type ) => {
    const oldCount = this.state.ingredients[type];
    if ( oldCount <= 0 ) {
        return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
    this.updatePurchaseState( updatedIngredients );
} */