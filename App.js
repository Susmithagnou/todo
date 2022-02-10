/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
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
const Stack = createNativeStackNavigator();
const App: () => Node = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="todo"
          component={todo}
          options={{ title: 'todo' ,headerShown:false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
