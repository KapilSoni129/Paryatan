import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import cityInput from './screens/cityInput';
import startInput from './screens/startInput'; 

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="City Input" component={cityInput} />
        <Stack.Screen name="Start Input" component={startInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
