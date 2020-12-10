import React, {Component} from 'react';
import Auxiliry from '../../HigherOrderComponents/Auxiliry';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        }
    }
    render() {
        return (
            <Auxiliry>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build controls</div>
            </Auxiliry>
        );

    }

}
export default BurgerBuilder;