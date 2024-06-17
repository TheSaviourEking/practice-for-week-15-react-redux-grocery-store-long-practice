const ADDTOCART = 'cart/ADD';

export const addToCart = (produceId) => {
    return {
        type: ADDTOCART,
        payload: { produceId }
    }
};

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADDTOCART:
            const newState = {
                ...state,
                [action.payload.produceId]: {
                    id: action.payload.produceId,
                    count: 1
                }
            };
            return newState;
        default:
            return state;
    }
}
export default cartReducer;
