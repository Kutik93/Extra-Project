import {SAVE_BOOK_REQUEST, BOOK_SUCCESS, BOOK_FAILURE, FETCH_BOOK_REQUEST, UPDATE_BOOK_REQUEST, DELETE_BOOK_REQUEST} from "./bookTypes";

const initialState = {
    book: '',
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_BOOK_REQUEST:
            return {
                ...state
            };
        case BOOK_SUCCESS:
            return {
                book: action.payload,
                error: ''
            };
        case BOOK_FAILURE:
            return {
                book: '',
                error: action.payload
            };
        case FETCH_BOOK_REQUEST:
                return {
                ...state
                };
       case UPDATE_BOOK_REQUEST:
                return {
                ...state
                };
       case DELETE_BOOK_REQUEST:
                return {
                ...state
                };
        default: return state;
    }
};

export default reducer;