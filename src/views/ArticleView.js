import React from 'react';
import { View, Text, Image, Button, Linking } from 'react-native';

export default function ArticleView({ route }) {
  const { article } = route?.params || {};

  return (
    <View>
      <Text>{article?.title}</Text>
      <Image source={{ uri: article?.urlToImage }} style={{ width: '100%', height: 200 }} />
      <Text>{article?.description}</Text>
      <Button title="Read more" onPress={() => Linking.openURL(article?.url)} />
    </View>
  );
}