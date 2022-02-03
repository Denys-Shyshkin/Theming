import { useState, useEffect } from 'react';

const POSTS_NUMBER = 20;
const Endpoint = 'https://jsonplaceholder.typicode.com/posts';

function usePosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(Endpoint)
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setIsLoading(false);
          setAllPosts(json);
        }, 2000);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const displayedPosts = allPosts?.slice(0, POSTS_NUMBER);

  return { displayedPosts, isLoading, isError };
}

export default usePosts;
