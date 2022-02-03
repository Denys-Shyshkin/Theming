import React from 'react';

import Post from '../Post';
import usePosts from '../../api/usePosts';
import Loader from '../Loader';
import Error from '../Error';

function PostsList() {
  const { displayedPosts, isLoading, isError } = usePosts();

  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <Error />;
    }

    return (
      <main>
        {displayedPosts.map(({ id, title, body }: any) => (
          <Post key={id} title={title} body={body} />
        ))}
      </main>
    );
  };

  return renderContent();
}

export default PostsList;
