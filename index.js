import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Navigation from './src/navigation';
import App from './App';
import Welcome from './src/screens/WelcomeScreen';
import Login from './src/screens/LoginScreen';
import Register from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ProfileScreen);
