import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stroke from './src/Stroke';
import Questions_first from './src/Questions_first';
import React from 'react';
import Submit from './src/Submit';
import Dashboard from './src/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DiaryLogQs from './src/DiaryLogQs';

import Questions_second from './src/Questions_second';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="DiaryLogQs" component={DiaryLogQs} />
        {/* <Stack.Screen name="Questions_second" component={Questions_second} />
        <Stack.Screen name="Submit" component={Submit} /> */}
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});








