import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // In real app, fetch post by ID
  return (
    <div>
      <h1>Blog Post #{id}</h1>
      <p>This is the full blog post content...</p>
    </div>
  );
};

export default BlogPost;
