import * as React from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { useState } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

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
]

export default function CalendarScreen({navigation}) {
  const [counter, setCounter] = useState(0);

  const renderItem = ({ item }) => (
    <Text>{item.title}</Text>
  );

  return (
    <View>
      <Calendar />
      <CalendarList />
      <Agenda />
    </View>
  )
}