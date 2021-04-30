import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    const { products, addToCart } = props;

    return (
        <div>
            <h3>This is shop</h3>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                />
                )
            }
        </div>
    );
};


const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

//const connectToStore = connect(mapStateToProps, mapDispatchToProps);

//connect(mapStateToProps, mapDispatchToProps)(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);