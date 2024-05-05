const API_ROOT = 'http://codeial.codingninjas.com/api/v2';

export const APIURls = {
  login: () => `${API_ROOT}/api/v2/users/login`,
  signup: () => `${API_ROOT}/api/v2/users/signup`,
  fetchPosts: (page = 10, limit = 5) =>
    `${API_ROOT}/api/v2/posts?page=${page}{&limit=${limit}`,
};
