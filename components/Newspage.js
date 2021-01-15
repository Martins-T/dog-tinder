import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, SafeAreaView, StyleSheet, Button } from 'react-native';
import NewsItem from './NewsItem';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch(
      'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d082a59d33344a38a3d44a60cd9b4ce9'
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.articles);
        createTwoButtonAlert(json.articles[0].title);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderNews = ( item ) => {
    const backgroundColor = item.title === selectedId ? 'orange' : 'grey';

    return (
      <NewsItem item={item} onPress={() => {}} style={{ backgroundColor }} />
    );
  };

  return (
    
      <View style={{ flex: 1 }}>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
           renderNews(item)
          )}
        />
      )}
    </View>
  
  );
};


