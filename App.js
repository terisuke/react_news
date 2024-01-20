import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/views/HomeScreen';
import ArticleView from './src/views/ArticleView';
import CategoryScreen from './src/views/CategoryScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Article" component={ArticleView} />
        <Drawer.Screen name="Category" component={CategoryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}