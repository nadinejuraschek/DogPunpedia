// REACT
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// COMPONENTS
import HashtagScreen from './src/screens/HashtagScreen';
import HomeScreen from './src/screens/HomeScreen';
import PunScreen from './src/screens/PunScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Hashtag: HashtagScreen,
    Pun: PunScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Social Media Helper'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <App />
  );
};