import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function DetailsScreen({route, navigation}) {
  const {id, title} = route.params;

  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>ID {id}</Text>
      <Text>Title {title}</Text>
      <Text>Counter {counter}</Text>
      <Text>Details Screen</Text>
    </View>
  )
}