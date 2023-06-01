import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import {theme, darkTheme} from './src/theme'
import Nav from './src/navigation/nav'

export default function App() {
  return (
       <Provider store={store}>
          <Nav />
        </Provider>
  );
}