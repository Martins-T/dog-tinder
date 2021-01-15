import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
import Profile from './Profile';
import ListItem from './ListItem';

export default Developers = ({ route, navigation }) => {
  const { DevelopersData } = route.params;

  // using react state
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState(DevelopersData);

  

  const renderItem = ({ item }) => {
    const backgroundColor = item.name === selectedId ? 'orange' : 'green';

    return (
      <ListItem
        item={item}
        onPress={() => setSelectedId(item.name)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    
      <Button title="Go to Home" onPress={() => {
        navigation.navigate("Home", {title:"Home screen" });
      }}/> 

      <Text style={styles.paragraph}> Hello World from Group 6 </Text>
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
