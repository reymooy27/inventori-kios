import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import AddItemScreen from '../../Screens/AddItemScreen';
import ItemDetailsScreen from'../../Screens/ItemDetailsScreen';
import EditItemScreen from '../../Screens/EditItemScreen';

const HomeStack = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
      <Stack.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} />
      <Stack.Screen name="EditItemScreen" component={EditItemScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({})

export default HomeStack;
