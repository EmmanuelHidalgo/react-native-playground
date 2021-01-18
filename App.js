import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import AmiiboScreen from './src/screens/AmiiboScreen';

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Components: ComponentsScreen,
//     List: ListScreen,
//     Image: ImageScreen,
//     Counter: CounterScreen,
//     Color: ColorScreen,
//     Amiibo: AmiiboScreen
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: 'App',
//     },
//   }
// );


const RootDrawerNavigator = createDrawerNavigator({
  ComponentsScreen: {
    screen: ComponentsScreen
  },
  AmiiboScreen: {
    screen: AmiiboScreen
  },
  CounterScreen: {
    screen: CounterScreen
  },
  ColorsScreen: {
    screen: ColorScreen
  },
  ListScreen: {
    screen: ListScreen
  },
  ImageScreen: {
    screen: ImageScreen
  }
})

export default createAppContainer(RootDrawerNavigator);
