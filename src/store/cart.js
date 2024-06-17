const ADDTOCART = 'cart/ADD';
const REMOVEFROMCART = 'cart/REMOVE';

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
            delete newState[action.payload.produceId]
            return newState;
        }
        default:
            return state;
    }
}
export default cartReducer;
