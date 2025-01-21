// Tablica z przykładowymi postami
const posts = [
    { id: 1, title: 'Post pierwszy' },
    { id: 2, title: 'Post drugi' }
  ];
  
  // Funkcja, która zwraca tablicę postów
  function getPosts() {
    return posts;
  }
  
  // Default export
  export default getPosts;
  
  // Named export
  export const postsData = posts;