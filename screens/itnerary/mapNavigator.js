import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import MapDisplay from './mapDisplay';

const Stack = createStackNavigator();

const MapsNavigator = ({ route, navigation }) => {
  console.log(route.params.tripPlanData)
  const date = Object.keys(route.params.tripPlanData);
  const numberOfDates = date.length;
  console.log('date:', date);
  const currentIndex = 0;

  const navigateToDay = (offset) => {
    const newIndex = currentIndex + offset;
    if (newIndex >= 0 && newIndex < date.length) {
      const newDate = date[newIndex];
      const newLocations = route.params[newDate];
      navigation.navigate(newDate, { locations: newLocations });
    }
  };

  return (
    <MapDisplay
      date={date[currentIndex]}
      locations={route.params.tripPlanData[date[currentIndex]]}
      navigateToDay={navigateToDay}
      currentIndex={currentIndex}
      numberOfDates={numberOfDates}
    />
  );
};

export default MapsNavigator;
