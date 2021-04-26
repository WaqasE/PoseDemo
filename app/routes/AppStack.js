import React from 'react';
import { createStackNavigator,  TransitionPresets } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Main from '../screens/Main';
import Name from '../screens/Name';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,...TransitionPresets.SlideFromRightIOS }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}

export default MyStack;