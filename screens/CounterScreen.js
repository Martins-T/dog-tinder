import * as React from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { useState } from 'react';

const DATA = [
  {
    key: 'unique-1',
    title: 'Title 1'
  },
  {
    key: 'unique-2',
    title: 'Title 2'
  },
  {
    key: 'unique-3',
    title: 'Title 3'
  },
  {
    key: 'unique-4',
    title: 'Title 4'
  },
]

const DATA_TWO = new Array(100).fill(null).map((v, i) => ({ key: i.toString(), title: `Kristine ${i}` }));

export default function CounterScreen({navigation}) {
  const [counter, setCounter] = useState(0);

  const renderItem = ({ item }) => (
    <Text style={{marginTop:20}}>{item.title}</Text>
  );

  return (
    <View>
      <Text>Counter {counter}</Text>
      <Button title="Increase counter" onPress={() => {
          setCounter(counter + 1);
        }}/>
       <FlatList 
          data={DATA} 
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

        <FlatList 
          data={DATA_TWO} 
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
    </View>
  )
}