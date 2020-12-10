import React, {Component} from 'react';
import Auxiliry from '../../HigherOrderComponents/Auxiliry';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 2,
            cheese: 2,
            salad: 1,
            bacon: 1
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