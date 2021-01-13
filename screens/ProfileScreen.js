import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity, Image} from 'react-native';
import styles from '../styles';
import { Card } from 'react-native-paper';


function Box({name, color}) {
  return (
    <View style={styles.box}>
      <View style={{backgroundColor: color}}>
        <Text style={styles.paragraph}>
          Profile
        </Text>
      </View>
    </View>
  )
}

export default function ProfileScreen({navigation}) {

  return (
    <View style={styles.container}>

    <Button title="Go to Home" onPress={() => {
      navigation.navigate("Home", {title:"Home screen" });
    }}/> 



    <Box name = "PROFILE"/>

    <Image style={styles.image} source={require('../assets/suns.png')} />

    <Text>Lorem ipsum </Text>

    </View>

    

  );
}

