import React from 'react';
import StackScreen from './src/route/stackScreen/StackScreen';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}
