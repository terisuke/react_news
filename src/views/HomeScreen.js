import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import News from '../services/News';
import NewsTile from '../widgets/NewsTile';

export default function HomeScreen({ navigation }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const news = new News();
    const response = await news.getTopHeadlines();
    setArticles(response.articles);
  };

  return (
    <View>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <NewsTile
            article={item}
            onPress={() => navigation.navigate('Article', { article: item })}
          />
        )}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
}