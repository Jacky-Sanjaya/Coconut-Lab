import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screen/homeScreen/HomeScreen';
import DrawerScreen from '../drawerScreen/DrawerScreen';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomeScreen" component={DrawerScreen} />
    </Stack.Navigator>
  );
}
