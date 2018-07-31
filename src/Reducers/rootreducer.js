import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import selectReducer from './selectReducer';

const rootReducers=combineReducers({
    router:routerReducer,
    selectReducer,
});

export default rootReducers;