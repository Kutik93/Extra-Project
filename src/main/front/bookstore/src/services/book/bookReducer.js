import * as BT from "./bookTypes";

const initialState = {
    book: '',
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BT.SAVE_BOOK_REQUEST:
            return {
                ...state
            };
        case BT.BOOK_SUCCESS:
            return {
                book: action.payload,
                error: ''
            };
        case BT.BOOK_FAILURE:
            return {
                book: '',
                error: action.payload
            };
        case BT.FETCH_BOOK_REQUEST:
                return {
                ...state
                };
       case BT.UPDATE_BOOK_REQUEST:
                return {
                ...state
                };
       case BT.DELETE_BOOK_REQUEST:
                return {
                ...state
                };
        default: return state;
    }
};

export default reducer;