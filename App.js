import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './styles';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SniffScreen from './screens/SniffScreen';
import WalkScreen from './screens/WalkScreen';



const Stack = createStackNavigator();


export default function App() {
  return  (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Sniff" component={SniffScreen} />
        <Stack.Screen name="Walk" component={WalkScreen} />
           
      </Stack.Navigator>
    </NavigationContainer>
  );
}





