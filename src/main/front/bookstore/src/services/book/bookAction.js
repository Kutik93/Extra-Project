import {SAVE_BOOK_REQUEST, BOOK_SUCCESS, BOOK_FAILURE, FETCH_BOOK_REQUEST, UPDATE_BOOK_REQUEST, DELETE_BOOK_REQUEST} from './bookTypes';
import axios from 'axios';

export const saveBook = book => {
    return dispatch => {
        dispatch(saveBookRequest());
        axios.post("http://localhost:8080/books", book)
            .then(response => {
                dispatch(bookSuccess(response.data));
            })
            .catch(error => {
                dispatch(bookFailure(error.message));
            });
    };
};

const saveBookRequest = () => {
    return {
        type: SAVE_BOOK_REQUEST
    };
};

const bookSuccess = book => {
    return {
        type: BOOK_SUCCESS,
        payload: book
    };
};

const bookFailure = error => {
    return {
        type: BOOK_FAILURE,
        payload: error
    };
};

const updateBookRequest = () => {
    return {
        type: UPDATE_BOOK_REQUEST
    };
};

export const updateBook = book => {
    return dispatch => {
        dispatch(updateBookRequest());
        axios.put("http://localhost:8080/books", book)
            .then(response => {
                dispatch(bookSuccess(response.data));
            })
            .catch(error => {
                dispatch(bookFailure(error));
            });
    };
};

const fetchBookRequest = () => {
    return {
        type: FETCH_BOOK_REQUEST
    };
};

export const fetchBook = bookId => {
    return dispatch => {
        dispatch(fetchBookRequest());
        axios.get("http://localhost:8080/books/"+bookId)
            .then(response => {
                dispatch(bookSuccess(response.data));
            })
            .catch(error => {
                dispatch(bookFailure(error));
            });
    };
};

const deleteBookRequest = () => {
    return {
        type: DELETE_BOOK_REQUEST
    };
};

export const deleteBook = bookId => {
    return dispatch => {
        dispatch(deleteBookRequest());
        axios.delete("http://localhost:8080/books/"+bookId)
            .then(response => {
                dispatch(bookSuccess(response.data));
            })
            .catch(error => {
                dispatch(bookFailure(error));
            });
    };
};