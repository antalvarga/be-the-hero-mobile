import React from 'react';
import {Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/pages/home';
import IncidentsScreen from './src/pages/incidents';
import DetailsScreen from './src/pages/detail';

const Main = createStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Main.Navigator screenOptions={{headerShown: false}}>
        <Main.Screen name="Home" component={HomeScreen} />
        <Main.Screen name= "Incidents" component={IncidentsScreen} />
        <Main.Screen name= "Details" component={DetailsScreen} />
      </Main.Navigator>
    </NavigationContainer>
  );
}