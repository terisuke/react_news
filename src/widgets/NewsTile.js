import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function NewsTile({ article, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Image
          source={{ uri: article.urlToImage }}
          style={{ width: '100%', height: 200 }}
        />
        <Text>{article.title}</Text>
        <Text>{article.description}</Text>
      </View>
    </TouchableOpacity>
  );
}