import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { Card } from 'react-native-paper';


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

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>

      <Box name = "DOG TINDER"/>


      <Button title="Sniff around"  onPress={() => {
        navigation.navigate("Sniff", {title:"Sniff screen" });
      }}/> 
      <Button title="Go for a walk?" onPress={() => {
        navigation.navigate("Walk", {title:"Walk screen", color: '#ccc'});
      }}/> 
      <Button title="Profile" onPress={() => {
        navigation.navigate("Profile", {title:"Settings screen" });
      }}/> 
      <Button title="App Settings" onPress={() => {
        navigation.navigate("Settings", {title:"Settings screen" });
      }}/>
    </View>
  );
}


