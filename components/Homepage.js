import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';
import Constants from 'expo-constants';
import Profile from './Profile';
import ListItem from './ListItem';
import ListData from '../Database';
import styles from '../styles';

function Box({name, color}) {
  return (
    <View style={styles.box}>
      <View style={{backgroundColor: color}}>
        <Text style={styles.paragraph}>
          {name}
        </Text>
      </View>
    </View>
  )
}

export default function Homepage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="DEVELOPERS"
        type="outline"
        onPress={() => {
          navigation.navigate('Developers', { DevelopersData: ListData });
        }}
      />

      <Button
        title="NEWS"
        type="outline"
        onPress={() => {
          navigation.navigate('News', { Title: 'This is world news' });
        }}
      />

      <Box name = "DOG TINDER"/>


      <Button title="Sniff around"  onPress={() => {
        navigation.navigate("Sniff around", {title:"Sniff screen" });
      }}/> 
      <Button title="Go for a walk?" onPress={() => {
        navigation.navigate("Go for a walk?", {title:"Walk screen", color: '#ccc'});
      }}/> 
      <Button title="Profile" onPress={() => {
        navigation.navigate("Profile", {title:"Settings screen" });
      }}/> 
      <Button title="App Settings" onPress={() => {
        navigation.navigate("App settings", {title:"Settings screen" });
      }}/>

    </SafeAreaView>
  );
}

//const styles = StyleSheet.create({
//  container: {
//    display: 'flex',
//    flexDirection: "column",
//  },
//  title_text: {},
//});
