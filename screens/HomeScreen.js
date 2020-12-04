import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import styles from '../styles';

function Box({name, color, cssclass}) {
  return (
    <View>

      {cssclass === 'circle' ?
        <View style={styles.circle}>
        <View style={{backgroundColor: color}}>
          <Text style={styles.paragraph}>
            {name}
          </Text>
        </View>
      </View>
      :
        <View style={styles.box}>
          <View style={{backgroundColor: color}}>
            <Text style={styles.paragraph}>
              {name}
            </Text>
          </View>
        </View>
      }
    </View>
  );
}

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Button title="Go to details" onPress={() => {
          navigation.navigate("Details", { id: 123456, title: "Home screen" });
        }}/>

        <Button title="Go to counter" onPress={() => {
          navigation.navigate("Counter");
        }}/>

        <Button title="Go to calendar" onPress={() => {
          navigation.navigate("Calendar");
        }}/>

        <Box name="#1" color="#f00" cssclass="circle"/>
        <Box name="#2" color="#0f0" cssclass="box"/>
        <Box name="#3" color="#00f" cssclass="box"/>
    </View>
  );
}