const ADDTOCART = 'cart/ADD';
const REMOVEFROMCART = 'cart/REMOVE';
const INCREMENTITEMCOUNT = 'cart/INCREMENTITEMCOUNT';
const DECREMENTITEMCOUNT = 'cart/DECREMENTITEMCOUNT';

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

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADDTOCART: {
            const newState = {
                ...state,
                [action.payload.produceId]: {
                    id: action.payload.produceId,
                    count: 1
                }
            };
            return newState;
        }
        case REMOVEFROMCART: {
            const newState = {
                ...state
            }
            delete newState[action.payload.produceId];
            return newState;
        }
        case INCREMENTITEMCOUNT: {
            const newState = {
                ...state
            };
            ++newState[action.payload.produceId].count;
            return newState;
        }
        case DECREMENTITEMCOUNT: {
            const newState = {
                ...state
            };
            newState[action.payload.produceId].count--;
            return newState;
        }
        default:
            return state;
    }
}
export default cartReducer;
