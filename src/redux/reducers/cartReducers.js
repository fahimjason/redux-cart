import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions"

const initialState = {
    cart: [],
    products: [
        { name: 'Laptops', id: 1 },
        { name: 'Mobile', id: 2 },
        { name: 'Watch', id: 3 },
        { name: 'Camera', id: 4 },
        { name: 'Tablet', id: 5 }
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productID: action.id,
                name: action.name,
                cartID: state.cart.length + 1
            }
            return {
                ...state,
                cart: [...state.cart, newItem]
            }
        case REMOVE_FROM_CART:
            const id = action.id;
            const newCart = state.cart.filter(item => item.cartID !== id);
            return { ...state, cart: newCart }
        default:
            return state
    }
}

export default cartReducers;