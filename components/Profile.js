import * as React from 'react';
import Constants from 'expo-constants';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Profile(props) {
  return (
    <View style={styles.profileContainer}>
      <Image
        style={styles.profilePicture}
        source={props.profilePicture}
      />
      <Text style={styles.nameTitle}>{props.name} </Text>
      <Text style={styles.message}>{props.message} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  nameTitle: {
    fontSize: 16,
    alignContent: 'center',
  },
  message: {
    fontSize: 14,
    alignContent: 'center',
    marginTop: 5,
  },
  profilePicture: {
    margin: 10,
    height: 100,
    width: 100,
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 10,
    alignContent: 'center',
    flexDirection: 'column',
    borderRadius: 10,
    margin: 20,
    shadowOpacity: 1,
    shadowColor: "grey"
  },
});
