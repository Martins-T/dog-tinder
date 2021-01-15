import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Profile from './components/Profile';
import ListItem from './components/ListItem';
import Developers from './components/Developers';
import Homepage from './components/Homepage';
import NewsPage from './components/Newspage';
import ListData from './Database';

import SettingsScreen from './TinderScreens/SettingsScreen';
import ProfileScreen from './TinderScreens/ProfileScreen';
import SniffScreen from './TinderScreens/SniffScreen';
import WalkScreen from './TinderScreens/WalkScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Developers" component={Developers} />
        <Stack.Screen name="News" component={NewsPage} />
        <Stack.Screen name="App settings" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Sniff around" component={SniffScreen} />
        <Stack.Screen name="Go for a walk?" component={WalkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
