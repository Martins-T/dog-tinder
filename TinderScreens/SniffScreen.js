import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity, Image} from 'react-native';
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

export default function SniffScreen({navigation}) {

  return (
    <View style={styles.container}>

    <Button title="Go to Home" onPress={() => {
      navigation.navigate("Home", {title:"Home screen" });
    }}/> 

    <Box name = "SNIFF AROUND"/>

    <Image style={{
      height: 281,
      width: 230,
    }} source={require('../assets/sniff.png')} />

    <Text style={styles.paragraph}>Rocky</Text>
    <Text style={styles.text}>I like long, long walks and chasing my tail</Text>


    </View>
  );
}