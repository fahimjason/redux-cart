import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    const { cart, removeFromCart } = props;

    return (
        <div>
            <h4>This is Cart</h4>
            <ul>
                {
                    cart.map(item => <li key={item.cartID}> {item.name}
                        <button onClick={() => removeFromCart(item.cartID)}>X</button> </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);