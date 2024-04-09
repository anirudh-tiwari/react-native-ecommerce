import { createStore, combineReducers } from 'redux';
import menuReducer from './features/menu';
import cartReducer from './features/cart';


const rootReducer = combineReducers({
	menu: menuReducer,
	cart: cartReducer,
});

const store = createStore(
	rootReducer
);


export default store;
