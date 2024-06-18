import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';
const LIKE = 'produce/LIKE';

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
};

export const likeProduce = (produceId) => {
    return {
        type: LIKE,
        payload: { produceId }
    }
};

export const getAllProduce = (state) => Object.values(state.produce);

const produceReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            })
            return newState;
        case LIKE: {
            const newState = { ...state };
            const produce = newState[action.payload.produceId]
            produce.liked = !produce.liked;
            return newState;
        }
        default:
            return state;
    }
}

export default produceReducer;
