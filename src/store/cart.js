const ADD_TO_CART = 'cart/ADD';
const REMOVE_FROM_CART = 'cart/REMOVE';
const INCREMENT_ITEM_COUNT = 'cart/INCREMENT_ITEM_COUNT';
const DECREMENT_ITEM_COUNT = 'cart/DECREMENT_ITEM_COUNT';
const EMPTY_CART = 'cart/EMPTY';

const initialState = { items: {}, order: [] };

export const addToCart = (produceId) => {
    return {
        type: ADD_TO_CART,
        payload: { produceId }
    }
};

export const removeFromCart = (produceId) => (
    {
        type: REMOVE_FROM_CART,
        payload: { produceId }
    }
)

export const incrementItemCount = (produceId) => ({
    type: INCREMENT_ITEM_COUNT,
    payload: { produceId }
})

export const decrementItemCount = (produceId) => ({
    type: DECREMENT_ITEM_COUNT,
    payload: { produceId }
})

export const emptyCart = () => ({ type: EMPTY_CART })

export const getCartItems = (state) => {
    const { cart, produce } = state;
    return Object.values(cart.order).map(item => ({ ...item, ...produce[item.id] }))
}

const cartReducer = (state = initialState, action) => {
    const newState = {
        ...state,
        items: {
            ...state.items,
            [action?.payload?.produceId]: {
                id: action?.payload?.produceId,
                count: 1
            }
        },
        order: [
            ...state.order,
        ]
    };
    switch (action.type) {
        case ADD_TO_CART: {
            const produceInOrderArr = newState.order.find(item => item.id === action.payload.produceId);
            if (!produceInOrderArr) {
                newState.order.push({
                    id: action.payload.produceId,
                    count: 1
                });
            }
            return newState;
        }
        case REMOVE_FROM_CART: {
            newState.order = newState.order.filter(item => item.id !== action.payload?.produceId);
            delete newState.items[action.payload.produceId];
            return newState;
        }
        case INCREMENT_ITEM_COUNT: {
            ++newState.order.find(item => item.id === action.payload.produceId).count;
            ++newState.items[action.payload.produceId].count;
            return newState;
        }
        case DECREMENT_ITEM_COUNT: {
            --newState.order.find(item => item.id === action.payload.produceId).count;
            --newState.items[action.payload.produceId].count;
            return newState;
        }
        case EMPTY_CART: {
            return {};
        }
        default:
            return state;
    }
}
export default cartReducer;
