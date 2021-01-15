import React from 'react';
import {TouchableOpacity} from 'react-native';
import Profile from './Profile';

export default  ListItem = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Profile name={item.name} message={item.message} profilePicture={item.picture} />
  </TouchableOpacity>
);


const styles = {
  item: {
    
  }
}