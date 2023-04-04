import * as BT from './bookTypes';
import axios from 'axios';

const bookSuccess = book => {
    return {
        type: BT.BOOK_SUCCESS,
        payload: book
    };
};

const bookFailure = error => {
    return {
        type: BT.BOOK_FAILURE,
        payload: error
    };
};

export const saveBook = book => {
    return dispatch => {
        dispatch({
            type: BT.SAVE_BOOK_REQUEST
        });
        axios.post("http://localhost:8080/books", book)
            .then(response => {
                dispatch(bookSuccess(response.data));
            })
            .catch(error => {
                dispatch(bookFailure(error.message));
            });
    };
};

export const updateBook = book => {
    return dispatch => {
        dispatch({
            type: BT.UPDATE_BOOK_REQUEST
        });
        axios.put("http://localhost:8080/books", book)
            .then(response => {
                dispatch(bookSuccess(response.data));
            })
            .catch(error => {
                dispatch(bookFailure(error));
            });
    };
};

export const fetchBook = bookId => {
    return dispatch => {
        dispatch({
            type: BT.FETCH_BOOK_REQUEST
        });
        axios.get("http://localhost:8080/books/"+bookId)
            .then(response => {
                dispatch(bookSuccess(response.data));
            })
            .catch(error => {
                dispatch(bookFailure(error));
            });
    };
};

export const deleteBook = bookId => {
    return dispatch => {
        dispatch({
            type: BT.DELETE_BOOK_REQUEST
        });
        axios.delete("http://localhost:8080/books/"+bookId)
            .then(response => {
                dispatch(bookSuccess(response.data));
            })
            .catch(error => {
                dispatch(bookFailure(error));
            });
    };
};