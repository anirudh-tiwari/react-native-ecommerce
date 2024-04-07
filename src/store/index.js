import { createStore, combineReducers } from 'redux';
import menuReducer from './features/menu';


const rootReducer = combineReducers({
	menu: menuReducer,
});

const store = createStore(
	rootReducer
);


export default store;
