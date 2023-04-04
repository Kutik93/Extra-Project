import {combineReducers} from 'redux';
import userReducer from './users/userReducer';
import authReducer from './users/auth/authReducer';
import bookReducer from './book/bookReducer';

const rootReducer = combineReducers({
        user : userReducer,
        book : bookReducer,
        auth : authReducer
    }
);
export default rootReducer;