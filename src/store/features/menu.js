import { createApiReducer } from '../redux/reducerFactory';
import GetDispatchers from '../redux/dispatchers';
import GetSelectors from '../redux/selectors';

const feature = 'menu';

const menuReducer = createApiReducer(feature, [], {
	activeMenu: 'dashboard',
	activeMenu2: 'dashboard2',
});

export default menuReducer;

export const MenuSelectors = () => {
	const { getStateProp } = GetSelectors(feature);
	return {
		activeMenu: getStateProp('activeMenu'),
		activeMenu2: getStateProp('activeMenu2'),
	};
};

export const MenuDispatchers = () => {
	const { state, setStateProp, reset } = GetDispatchers(feature);
	return {
		setActive: (value) => setStateProp('activeMenu', value),
		setActive2: (value) => setStateProp('activeMenu2', value),
	};
};
