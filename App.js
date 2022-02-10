/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import todo from './src/todo';
import Detail from './src/Detail';
const Stack = createNativeStackNavigator();
const App = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='todo'>
        <Stack.Screen
          name="todo"
          component={todo}
          options={{ title: 'todo' ,headerShown:false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: 'Detail' ,headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
