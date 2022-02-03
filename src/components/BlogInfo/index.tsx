import React from 'react';

function BlogInfo() {
  return (
    <div>
      <h3>Personal blog by John Doe</h3>
      <h3>
        List of posts from{' '}
        <a
          href="https://jsonplaceholder.typicode.com/"
          target="_blank"
          rel="noreferrer"
        >
          JSONPlaceholder
        </a>
      </h3>
    </div>
  );
}

export default BlogInfo;
