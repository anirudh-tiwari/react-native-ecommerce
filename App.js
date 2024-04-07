import store from "./src/store";
import { Provider } from 'react-redux';
import AppNavigator from "./src/pages/AppNavigator";

export default function App() {
  return (
    <Provider store={store}>
    <AppNavigator />
    </Provider>
  );
}

