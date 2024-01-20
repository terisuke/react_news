import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import News from '../services/News';
import NewsTile from '../widgets/NewsTile';

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

export default function HomeScreen() {
  const [articles, setArticles] = useState([]);
  const navigation = useNavigation();

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
      <Button
        title="Open Drawer"
        onPress={() => navigation.openDrawer()}
      />
      {categories.map((category) => (
        <Button
          title={category}
          onPress={() => navigation.navigate('Category', { category })}
        />
      ))}
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