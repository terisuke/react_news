import { NEWS_API_KEY } from '@env';
import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';

export default class News {
  async getTopHeadlines(country = 'us') {
    try {
      const response = await axios.get(`${BASE_URL}/top-headlines?country=${country}&apiKey=${NEWS_API_KEY}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getArticlesByCategory(category) {
    try {
      const response = await axios.get(`${BASE_URL}/top-headlines?category=${category}&apiKey=${NEWS_API_KEY}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}