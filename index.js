/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import RootNavigation from './src/screen/navigation/Navigation';

AppRegistry.registerComponent(appName, () => RootNavigation);
