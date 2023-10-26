import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CityInput from './screens/inputUser/cityInput';
import LocationInput from './screens/inputUser/locationInput'; 
import DateInput from './screens/inputUser/dateInput';
import BudgetInput from './screens/inputUser/budgetInput';
import InterestInput from './screens/inputUser/interestsInput';

import MapsNavigator from './screens/itnerary/mapNavigator';

import { FormDataProvider } from './utils/formData';

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <FormDataProvider>
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
          <Stack.Screen name="City Input" component={CityInput} />
          <Stack.Screen name="Location Input" component={LocationInput} />
          <Stack.Screen name="Date Input" component={DateInput} />
          <Stack.Screen name="Budget Input" component={BudgetInput} />
          <Stack.Screen name="Interest Input" component={InterestInput} />
          <Stack.Screen name="Maps view" component={MapsNavigator}/>
        </Stack.Navigator>
      </FormDataProvider>
    </NavigationContainer>
  );
}
