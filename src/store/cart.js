const ADDTOCART = 'cart/ADD';
const REMOVEFROMCART = 'cart/REMOVE';
const INCREMENTITEMCOUNT = 'cart/INCREMENTITEMCOUNT';
const DECREMENTITEMCOUNT = 'cart/DECREMENTITEMCOUNT';
const EMPTYCART = 'cart/EMPTY';

const initialState = { items: {}, order: [] };

export const addToCart = (produceId) => {
    return {
        type: ADDTOCART,
        payload: { produceId }
    }
};

export const removeFromCart = (produceId) => (
    {
        type: REMOVEFROMCART,
        payload: { produceId }
    }
)

export const incrementItemCount = (produceId) => ({
    type: INCREMENTITEMCOUNT,
    payload: { produceId }
})

export const decrementItemCount = (produceId) => ({
    type: DECREMENTITEMCOUNT,
    payload: { produceId }
})

export const emptyCart = () => ({ type: EMPTYCART })

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
        case ADDTOCART: {
            const produceInOrderArr = newState.order.find(item => item.id === action.payload.produceId);
            if (!produceInOrderArr) {
                newState.order.push({
                    id: action.payload.produceId,
                    count: 1
                });
            }
            return newState;
        }
        case REMOVEFROMCART: {
            newState.order = newState.order.filter(item => item.id !== action.payload?.produceId);
            delete newState.items[action.payload.produceId];
            return newState;
        }
        case INCREMENTITEMCOUNT: {
            ++newState.order.find(item => item.id === action.payload.produceId).count;
            ++newState.items[action.payload.produceId].count;
            return newState;
        }
        case DECREMENTITEMCOUNT: {
            --newState.order.find(item => item.id === action.payload.produceId).count;
            --newState.items[action.payload.produceId].count;
            return newState;
        }
        case EMPTYCART: {
            return {};
        }
        default:
            return state;
    }
}
export default cartReducer;
