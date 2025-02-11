import { useState, useEffect } from 'react';
import Post from './Post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(result => result.json())
      .then(posts => setPosts(posts))
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map(post => <Post key={post.id} {...post} />)
      )}
    </>
  );
}

export default Posts;
