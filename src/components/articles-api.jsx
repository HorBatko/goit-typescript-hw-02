import axios from 'axios';

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1';

interface Article {
  created_at: string;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text: string | null;
  comment_text: string | null;
  num_comments: number;
}

interface ApiResponse {
  hits: Article[];
}

export const getArticles = async (topic: string, currentPage: number): Promise<Article[]> => {
  const response = await axios.get<ApiResponse>('/search', {
    params: {
      query: topic,
      page: currentPage,
      hitsPerPage: 5,
    },
  });

  return response.data.hits;
};
