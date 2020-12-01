import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Navigation from './src/navigation';
import App from './App';
import Welcome from './src/screens/Welcome';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Welcome);
