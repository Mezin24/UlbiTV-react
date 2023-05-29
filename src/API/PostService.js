import axios from 'axios';

export class PostService {
  static async fetchPosts(limit = 10, page = 1) {
    const response = await axios('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }

  static async fetchPost(id) {
    const response = await axios(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response;
  }
  static async fetchPostComments(id) {
    const response = await axios(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response;
  }
}
