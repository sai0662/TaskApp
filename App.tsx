/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import Calculator from './src/Screens/CalculatorScreen';
import StopWatch from './src/Screens/StopWatchScreen';
import Notes from './src/Screens/NotesScreen';
import NoteInputData from './src/Screens/NoteInputData';
import NoteDetails from './src/Screens/NotesDetails';
import BackGroundTimer from './src/Screens';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="calculator" component={Calculator} />
        <Stack.Screen name="stopwatch" component={StopWatch} />
        <Stack.Screen name="notes" component={Notes} />
        <Stack.Screen name="addnotes" component={NoteInputData} />
        <Stack.Screen name="notedetails" component={NoteDetails} />
        <Stack.Screen name="Background" component={BackGroundTimer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
