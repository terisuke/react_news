import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import News from '../services/News';
import NewsTile from '../widgets/NewsTile';

export default function CategoryScreen({ route, navigation }) {
  const { category } = route.params;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const news = new News();
    const response = await news.getArticlesByCategory(category);
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