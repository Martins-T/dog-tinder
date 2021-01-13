import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {useState} from 'react';


export default function SettingsScreen({navigation}) {


  const[counter, setCounter] = useState(0);

  return (
    <View>

    <Button title="Go to Home" onPress={() => {
      navigation.navigate("Home", {title:"Home screen" });
    }}/> 

    <Text>Settings </Text>

    </View>
  );
}