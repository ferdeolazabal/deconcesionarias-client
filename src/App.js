import { Provider } from 'react-redux';
import { store } from './redux/store/store';

import { AppRouter } from './router/AppRouter.js';
import './App.css';

const App = () => {
  
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
export default App;