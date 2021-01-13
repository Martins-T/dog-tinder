import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity, Image} from 'react-native';
import styles from '../styles';
import { Card } from 'react-native-paper';


export default function WalkScreen({navigation}) {


  return (
    <View style={styles.container}>

    <Button title="Go to Home" onPress={() => {
      navigation.navigate("Home", {title:"Home screen" });
    }}/> 

    <Text>Walk</Text>

    </View>
  );
}