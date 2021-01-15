import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default NewsItem = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Card>
      <Card.Title>{item.title}</Card.Title>
      <Card.Image source={{ uri: item.urlToImage }}></Card.Image>
      <Card.Divider />
      <Card.FeaturedSubtitle style={styles.sb}> {item.description} </Card.FeaturedSubtitle>
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {},
  sb: {
    color: "black",
  },
});