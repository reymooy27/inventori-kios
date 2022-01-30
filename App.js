import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './Redux/store.js';
import { Provider } from 'react-redux'
import HomeStack from './Stacks/HomeStack';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack/>
      </NavigationContainer>
    </Provider>
  );
}

