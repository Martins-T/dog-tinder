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

export default function WalkScreen({navigation}) {


  return (
    
    <View style={styles.container}>

    <Button title="Go to Home" onPress={() => {
      navigation.navigate("Home", {title:"Home screen" });
    }}/> 

    <Box name = "GO FOR A WALK?"/>

    <Image style={{
      height: 391,
      width: 230,
    }} source={require('../assets/walk.png')} />

    </View>
  );
}